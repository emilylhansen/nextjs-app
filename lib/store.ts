// import usersByIdReducer from "@/lib/features/usersById/usersByIdSlice";
import navigationReducer from "@/lib/features/navigation/navigationSlice";
import transactionsReducer from "@/lib/features/transactions/transactionsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    transactions: transactionsReducer,
    // usersById: usersByIdReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["usersById/{id}/rejected"],
        ignoredPaths: ["usersById"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
