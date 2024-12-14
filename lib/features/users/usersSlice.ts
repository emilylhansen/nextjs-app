import { getUsers } from "@/lib/features/users/usersActions";
import { Users } from "@/lib/features/users/usersTypes";
import { createSlice } from "@reduxjs/toolkit";
import { Array, Option, pipe } from "effect";

type State = {
  users: Users;
};

const initialState: State = {
  users: Users.make({
    status: "idle",
    error: Option.none(),
    data: Option.none(),
    lastUpdated: new Date(),
  }),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.users.status = "pending";
        state.users.error = Option.none();
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users.status = "fulfilled";
        state.users.data = Option.some([...action.payload]);
        state.users.error = Option.none();
        state.users.lastUpdated = new Date();
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.users.status = "rejected";
        state.users.error = pipe(action.payload, Option.fromNullable);
        state.users.lastUpdated = new Date();
      });
  },
});

export default usersSlice.reducer;
