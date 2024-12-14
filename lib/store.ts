import usersReducer from "@/lib/features/users/usersSlice";
import navigationReducer from "@/lib/features/navigation/navigationSlice";
import transactionsReducer from "@/lib/features/transactions/transactionsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Option } from "effect";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    transactions: transactionsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["usersById/{id}/rejected"],
        ignoredPaths: ["usersById"],
        isSerializable: (value: any) => {
          // Allow Option.none() by identifying it explicitly, since redux-toolkit infers it as {} which is non-serializable
          if (value === Option.none()) {
            return true;
          }
          return typeof value !== "function"; // Default check
        },
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
