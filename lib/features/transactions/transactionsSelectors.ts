import { RootState } from "@/lib/store";

export const getTransactionsData = (state: RootState) =>
  state.transactions.transactions.data;
export const getTransactionsError = (state: RootState) =>
  state.transactions.transactions.error;
export const getTransactionsStatus = (state: RootState) =>
  state.transactions.transactions.status;
export const getTransactionsLastUpdated = (state: RootState) =>
  state.transactions.transactions.lastUpdated;
