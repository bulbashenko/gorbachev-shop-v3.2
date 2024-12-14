'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';       // импорт вашего типа RootState
import { Theme, setTheme, toggleTheme } from '@/store/slices/themeSlice';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  /** Если хотите задать тему по умолчанию, вдруг куки нет (SSR). 
      Но чаще это будете делать в RootLayout при SSR и dispatch(setTheme). */
  defaultTheme?: Theme; 
}

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Ставим класс на <html> при каждом изменении Redux state.theme
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Если хотите «подстраховаться» на случай, если куки нет
  // и Redux по умолчанию 'dark', но вы хотите подменить на defaultTheme:
  useEffect(() => {
    if (theme === 'dark' && defaultTheme === 'light') {
      dispatch(setTheme('light'));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider.');
  }
  return context;
}
