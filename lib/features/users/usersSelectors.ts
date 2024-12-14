import { RootState } from "@/lib/store";

export const getUsersData = (state: RootState) => state.users.users.data;
export const getUsersError = (state: RootState) => state.users.users.error;
export const getUsersStatus = (state: RootState) => state.users.users.status;
export const getUsersLastUpdated = (state: RootState) =>
  state.users.users.lastUpdated;
