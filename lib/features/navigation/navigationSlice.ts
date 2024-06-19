import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export enum NavigationItemTitle {
  Dashboard = "DASHBOARD",
  Transactions = "TRANSACTIONS",
  Cards = "CARDS",
  Reports = "REPORTS",
  Settings = "SETTINGS",
  Chat = "CHAT",
}

// Define a type for the slice state
interface NavigationState {
  activePage: NavigationItemTitle;
}

// Define the initial state using that type
const initialState: NavigationState = {
  activePage: NavigationItemTitle.Dashboard,
};

export const navigationSlice = createSlice({
  name: "navigation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<NavigationItemTitle>) => {
      state.activePage = action.payload;
    },
  },
});

export const { set } = navigationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectActivePage = (state: RootState) =>
  state.navigation.activePage;

export default navigationSlice.reducer;
