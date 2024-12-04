import { Schema } from "@effect/schema";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Array, Effect, Option, pipe } from "effect";
import * as Model from "../../../app/api/Model";
import * as transactions from "../../../app/api/transactions/route";
import type { RootState } from "../../store";

const Transactions = Schema.Array(Model.Transaction);
type Transactions = typeof Transactions.Type;

const TransactionsAPIInfo = Model.APIInfo<string, Transactions>(
  Schema.String,
  Transactions
).pipe(Schema.brand("TransactionsAPIInfo"));
type TransactionsAPIInfo = typeof TransactionsAPIInfo.Type;

export const getTransactions = createAsyncThunk<
  Transactions,
  void,
  { rejectValue: string }
>("transactions/getTransactions", async (_, thunkAPI) => {
  return await Effect.runPromise(transactions.GET_effect)
    .then((res) => {
      return res;
    })
    .catch((r) => {
      return thunkAPI.rejectWithValue(r.message);
    });
});

type TransactionsState = {
  transactions: TransactionsAPIInfo;
};

const initialState: TransactionsState = {
  transactions: TransactionsAPIInfo.make({
    status: "idle",
    error: Option.none(),
    data: Option.none(),
    lastUpdated: new Date(),
  }),
};

// Slice
export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.transactions.status = "pending";
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions.status = "fulfilled";
        state.transactions.data = Option.some(
          Array.take([...action.payload], 100)
        );
        state.transactions.lastUpdated = new Date();
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.transactions.status = "rejected";
        state.transactions.lastUpdated = new Date();
        state.transactions.error = pipe(action.payload, Option.fromNullable);
      });
  },
});

// Actions
export const {} = transactionsSlice.actions;

// Selectors
export const getTransactionsData = (state: RootState) =>
  state.transactions.transactions.data;
export const getTransactionsError = (state: RootState) =>
  state.transactions.transactions.error;
export const getTransactionsStatus = (state: RootState) =>
  state.transactions.transactions.status;
export const getTransactionsLastUpdated = (state: RootState) =>
  state.transactions.transactions.lastUpdated;

export default transactionsSlice.reducer;
