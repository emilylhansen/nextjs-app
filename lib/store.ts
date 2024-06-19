import navigationSlice from "@/lib/features/navigation/navigationSlice";
import transactionsSlice from "@/lib/features/transactions/transactionsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    transactions: transactionsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
