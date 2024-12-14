'use client';

import React from 'react';
import { useThemeContext } from '@/providers/ThemeProvider'; // Путь исправьте под ваш проект
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme} className="p-2 focus:outline-none">
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
}
