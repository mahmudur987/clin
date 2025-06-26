// src/features/ui/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
  showModal: false,
  darkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
    setSidebar(state, action) {
      state.showSidebar = action.payload;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    setModal(state, action) {
      state.showModal = action.payload;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setSidebar,
  toggleModal,
  setModal,
  toggleDarkMode,
  setDarkMode,
} = uiSlice.actions;

export default uiSlice.reducer;
