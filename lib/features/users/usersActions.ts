import { UsersArray } from "@/lib/features/users/usersTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Effect } from "effect";
import * as users from "../../../app/api/users/route";

export const getUsers = createAsyncThunk<
  UsersArray,
  void,
  { rejectValue: string }
>("users/getUsers", async (_, thunkAPI) => {
  return await Effect.runPromise(users.GET_effect)
    .then((res) => {
      return res;
    })
    .catch((r) => {
      return thunkAPI.rejectWithValue(r.message);
    });
});
