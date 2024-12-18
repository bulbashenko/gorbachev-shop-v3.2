'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitcher: React.FC = () => {
  // Получаем текущую тему, системную тему и функцию смены темы из next-themes
  const { setTheme, resolvedTheme } = useTheme();

  // Колбэк для переключения темы
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      {resolvedTheme === 'light' ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
