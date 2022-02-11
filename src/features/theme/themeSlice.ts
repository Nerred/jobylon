import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
  darkModeColor: string;
  primaryColor: string;
  secondaryColor: string;
}

const initialState: ThemeState = {
  darkMode: false,
  darkModeColor: "#424242",
  primaryColor: "#cbcfec",
  secondaryColor: "#fdf5f5",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    //increment
    activateDarkmode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { activateDarkmode } = themeSlice.actions;
export default themeSlice.reducer;
