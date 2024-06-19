import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export enum TransactionsItemTitle {
  Dashboard = "DASHBOARD",
  Transactions = "TRANSACTIONS",
  Cards = "CARDS",
  Reports = "REPORTS",
  Settings = "SETTINGS",
  Chat = "CHAT",
}

// Define a type for the slice state
interface TransactionsState {
  activePage: TransactionsItemTitle;
}

// Define the initial state using that type
const initialState: TransactionsState = {
  activePage: TransactionsItemTitle.Dashboard,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<TransactionsItemTitle>) => {
      state.activePage = action.payload;
    },
  },
});

export const { set } = transactionsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectActivePage = (state: RootState) =>
  state.transactions.activePage;

export default transactionsSlice.reducer;
