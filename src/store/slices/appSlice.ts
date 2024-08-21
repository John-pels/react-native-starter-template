import type { Draft, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface App {
  isConnectedToInternet: boolean;
  theme: "light" | "dark";
}

const initialState: App = {
  isConnectedToInternet: false,
  theme: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsConnectedToInternet: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.isConnectedToInternet>
    ) => {
      state.isConnectedToInternet = action.payload;
    },
    toggleTheme: (state: Draft<typeof initialState>) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.theme>
    ) => {
      state.theme = action.payload;
    },
  },
});

export const { setIsConnectedToInternet, toggleTheme, setTheme } =
  appSlice.actions;

export default appSlice.reducer;
