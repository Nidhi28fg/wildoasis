import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
}

const initialState: UiState = {
  isSidebarOpen: false,
  isDarkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarOpen, toggleDarkMode, setDarkMode } = uiSlice.actions;

export default uiSlice.reducer;
