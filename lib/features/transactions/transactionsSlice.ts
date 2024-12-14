import { getTransactions } from "@/lib/features/transactions/transactionsActions";
import { Transactions } from "@/lib/features/transactions/transactionsTypes";
import { createSlice } from "@reduxjs/toolkit";
import { Array, Option, pipe } from "effect";

type State = {
  transactions: Transactions;
};

const initialState: State = {
  transactions: Transactions.make({
    status: "idle",
    error: Option.none(),
    data: Option.none(),
    lastUpdated: new Date(),
  }),
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.transactions.status = "pending";
        state.transactions.error = Option.none();
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions.status = "fulfilled";
        state.transactions.data = Option.some(
          Array.take([...action.payload], 100)
        );
        state.transactions.error = Option.none();
        state.transactions.lastUpdated = new Date();
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.transactions.status = "rejected";
        state.transactions.error = pipe(action.payload, Option.fromNullable);
        state.transactions.lastUpdated = new Date();
      });
  },
});

export default transactionsSlice.reducer;
