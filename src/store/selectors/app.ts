import { RootState } from "..";

export const isConnectedToInternet = (state: RootState): boolean =>
  state.app.isConnectedToInternet;
export const theme = (state: RootState): string => state.app.theme;
