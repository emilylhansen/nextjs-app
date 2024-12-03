import prisma from "@/lib/db";
import { Effect } from "effect";
import * as Model from "../Model";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET = async (request: Request) => {
  const res = await prisma.transaction.findMany();

  return new Response(JSON.stringify(res), {
    status: 200,
  });
};

export const GET_effect = Effect.tryPromise({
  try: () =>
    fetch("/api/transactions").then(
      (res) => res.json() as Promise<Array<Model.Transaction>>
    ),
  catch: (error) =>
    new Model.GetTransactionsError({ message: JSON.stringify(error) }),
});

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, thunkAPI) => {
    const a = Effect.runPromiseExit(GET_effect).then(console.log);

    // return thunkAPI.rejectWithValue(error.message); // Pass error to extraReducers
  }
);
