// src/store/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
      // Запись в cookie при каждом изменении
      Cookies.set('theme', action.payload, { expires: 365 });
    },
    toggleTheme(state) {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      Cookies.set('theme', newTheme, { expires: 365 });
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
