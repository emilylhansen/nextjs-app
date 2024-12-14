import { createAsyncThunk } from "@reduxjs/toolkit";
import { Effect } from "effect";
import * as transactions from "../../../app/api/transactions/route";
import { TransactionsArray } from "@/lib/features/transactions/transactionsTypes";
import { transactionsSlice } from "@/lib/features/transactions/transactionsSlice";

export const getTransactions = createAsyncThunk<
  TransactionsArray,
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

// export const {} = transactionsSlice.actions;
