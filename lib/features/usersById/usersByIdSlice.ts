// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
// import { User } from "@/app/api/Model";
// import * as API from "@/app/api/API";
// import {
//   Effect,
//   Schedule,
//   pipe,
//   Array,
//   Option,
//   Either,
//   Record,
//   flow,
// } from "effect";
// import { Schema } from "@effect/schema";
// import * as Model from "@/app/api/Model";
// import { StatusCodes } from "http-status-codes";
// import {
//   APIStatus,
//   FulfilledAction,
//   PendingAction,
//   RejectedAction,
//   RejectedWithValueAction,
// } from "@/lib/types";
// import { ParseError } from "@effect/schema/ParseResult";
// import { APIData } from "@/lib/types";

// const retryPolicy = Schedule.exponential(1000).pipe(
//   Schedule.compose(Schedule.recurs(3))
// );

// export const fetchUsersById = createAsyncThunk<Array<Model.UserS>, number>(
//   "users",
//   async (thunkAPI) => {
//     const response = await pipe(
//       API.getUsers,
//       Effect.timeout("1 second"),
//       Effect.retry(retryPolicy),
//       Effect.tap((res) => console.log(res)),
//       // Effect.map(r =>
//       //   flatMap(
//       //     Schema.decodeUnknown(Model.UserS, {
//       //       onExcessProperty: "error",
//       //       errors: "all",
//       //       exact: true,
//       //     })
//       //   )
//       // ),
//       // Effect.catchAll((e) => Effect.succeed(thunkAPI.rejectWithValue(e))),
//       Effect.runPromise
//     );

//     return response;
//   }
// );

// export const fetchUserById = createAsyncThunk<Model.UserS, number>(
//   "usersById/{id}",
//   async (userId: number, thunkAPI) => {
//     const response = await pipe(
//       userId,
//       API.getUserById,
//       Effect.timeout("1 second"),
//       Effect.retry(retryPolicy),
//       Effect.tap((res) => console.log(res)),
//       Effect.flatMap(
//         Schema.decodeUnknown(Model.UserS, {
//           onExcessProperty: "error",
//           errors: "all",
//           exact: true,
//         })
//       ),
//       Effect.catchAll((e) => Effect.succeed(thunkAPI.rejectWithValue(e))),
//       Effect.runPromise
//     );

//     return response;
//   }
// );

// // Define a type for the slice state
// interface UsersByIdState {
//   usersById: APIData<Record<string, User>, Model.GetUserByIdError>;
// }

// // Define the initial state using that type
// const initialState: UsersByIdState = {
//   usersById: {
//     status: APIStatus.Idle,
//     data: Either.right({}),
//   },
// };

// export const usersByIdSlice = createSlice({
//   name: "usersById",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsersById.pending, (state, action) => {
//       state.usersById.status = APIStatus.Pending;
//     });
//     builder.addCase(fetchUsersById.fulfilled, (state, action) => {
//       state.usersById.status = APIStatus.Fulfilled;

//       // const newData = pipe(
//       //   state.usersById.data,
//       //   Either.map((data) =>
//       //     Array.reduce(action.payload, data, (acc, value) => {

//       //       pipe(acc, Record.set(value.id, Schema.decode(Model.UserS, value)));
//       //     })
//       //   )
//       // );
//     });
//     builder.addCase(fetchUsersById.rejected, (state, action) => {
//       state.usersById.status = APIStatus.Rejected;

//       // TODO: 6/25/24 payload not inferred. Casting unsafe!
//       state.usersById.data = Either.left(
//         action.payload as Model.GetUserByIdError
//       );
//     });
//   },
// });

// export const {} = usersByIdSlice.actions;

// export const selectUsersById = (state: RootState) => state.usersById.usersById;

// export default usersByIdSlice.reducer;
