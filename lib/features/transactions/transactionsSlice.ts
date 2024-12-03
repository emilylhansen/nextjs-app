import { reject } from "./../../../node_modules/effect/src/internal/stm/stm";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  createAsyncThunk,
  createReducer,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { Array } from "effect";
import type { RootState } from "../../store";
import * as Model from "../../../app/api/Model";
import { Either } from "effect/Either";
import { Data, pipe, Brand, Option, Effect } from "effect";
import { Schema } from "@effect/schema";
import * as transactions from "../../../app/api/transactions/route";

// export enum APIStatus {
//   IDLE,
//   PENDING,
//   REJECTED,
//   FULFILLED,
// }
// type APIError<ErrorType = any> = Option.Option<ErrorType>;
// type APIData<DataType = any> = Option.Option<DataType>;
// export type APIInfo<ErrorType = any, DataType = any> = {
//   status: APIStatus;
//   error: APIError<ErrorType>;
//   data: APIData<DataType>;
//   lastUpdated: Date;
// };

// export const APIStatusSchema = Schema.Enums({
//   IDLE: "IDLE",
//   PENDING: "PENDING",
//   REJECTED: "REJECTED",
//   FULFILLED: "FULFILLED",
// });

export const APIStatus = Schema.Literal(
  "idle",
  "pending",
  "rejected",
  "fulfilled"
);

// Define APIError as a branded Option<ErrorType>
// const APIError = <ErrorType extends any>(errorType: Schema.Schema<ErrorType>) =>
//   Schema.Option(errorType).pipe(Schema.brand("APIError"));
// type APIError = typeof APIError;

// Define APIData as a branded Option<DataType>
// const APIData = <DataType extends any>(dataType: Schema.Schema<DataType>) =>
//   Schema.Option(dataType).pipe(Schema.brand("APIData"));
// type APIData = typeof APIData;

// Define APIInfo
const APIInfo = <ErrorType = any, DataType = any>(
  errorType: Schema.Schema<ErrorType>,
  dataType: Schema.Schema<DataType>
) =>
  Schema.Struct({
    status: APIStatus,
    error: Schema.Option(errorType),
    data: Schema.Option(dataType),
    // error: APIError<ErrorType>(errorType),
    // data: APIData<DataType>(dataType),
    lastUpdated: Schema.Date,
  });

const f = Schema.Record(Schema.String, Model.Transaction);
const Transactions = Schema.Array(Model.Transaction);
type Transactions = typeof Transactions.Type;
// Define TransactionsAPIInfo as a branded APIInfo<string, Record<string, Model.Transaction>>
const TransactionsAPIInfo = APIInfo<string, Transactions>(
  Schema.String,
  Transactions
).pipe(Schema.brand("TransactionsAPIInfo"));
type TransactionsAPIInfo = typeof TransactionsAPIInfo.Type;

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

const a = TransactionsAPIInfo.pipe(Schema.pick("data"));
type a = typeof a.Type;
export const getTransactions_ = createAsyncThunk<Transactions>(
  "transactions/getTransactions",
  async (arg, thunkAPI) => {
    const a = Effect.runPromise(transactions.GET_effect)
      .then((res) => {
        debugger;
        console.log(res);
        return res;
      })
      .catch((r) => {
        debugger;
        return thunkAPI.rejectWithValue(r);
      });
    return await a;
  }
);

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    // set: (state, action: PayloadAction<Array<Model.Transaction>>) => {
    //   state.transactions = Array.reduce(
    //     action.payload,
    //     state.transactions,
    //     (acc, transaction) => ({ [transaction.id]: transaction, ...acc })
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions_.pending, (state) => {
        state.transactions.status = "pending";
      })
      .addCase(getTransactions_.fulfilled, (state, action) => {
        state.transactions.status = "fulfilled";
        state.transactions.data = Option.some([...action.payload]);
        state.transactions.lastUpdated = new Date();
        debugger;
      })
      .addCase(getTransactions_.rejected, (state, action) => {
        state.transactions.status = "rejected";
        state.transactions.lastUpdated = new Date();
        debugger;
        // state.transactions.error = Option.some(action.payload);
      });
  },
});

export const {} = transactionsSlice.actions;

export const getTransactions = (state: RootState) =>
  state.transactions.transactions.data;

export default transactionsSlice.reducer;
