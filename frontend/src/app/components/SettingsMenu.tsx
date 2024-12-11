// components/SettingsMenu.tsx
"use client";
import React, { useRef, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageMenu from './LanguageMenu';
import CurrencyMenu from './CurrencyMenu';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai'; // Импортируем иконку
import { dm_mono } from '../utils/fontConfig';

interface SettingsMenuProps {
  onClose: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрываем меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <>
      {/* Полупрозрачный фон только до нижней навигации */}
      <div className="fixed top-0 left-0 right-0 bottom-[60px] z-40 bg-black bg-opacity-40" />

      {/* Само меню поверх этого фона, над BottomNav */}
      <div
        ref={menuRef}
        className="fixed inset-x-0 bottom-[4.4rem] mx-auto z-50 bg-background w-full max-w-md p-4 pb-7 rounded-t-lg
                   flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button onClick={onClose}>
            <AiOutlineClose className='w-4 h-4' /> {/* Используем иконку */}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {/* Переключатель темы */}
          <div className="flex items-center justify-between">
            <span>Theme:</span>
            <ThemeSwitcher />
          </div>

          {/* Переключатель языка */}
          <div className="flex items-center justify-between">
            <span>Language:</span>
            <LanguageMenu />
          </div>

          {/* Переключатель валюты */}
          <div className="flex items-center justify-between">
            <span>Currency:</span>
            <CurrencyMenu />
          </div>

          {/* Ссылка на аккаунт */}
          <div>
            <Link href="/account" className="text-primary underline">
              Go to Account
            </Link>
          </div>

          {/* Поле для поиска */}
          <div>
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className={`${dm_mono.className} text-sm w-full col-span-1 md:col-span-6 px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none focus:border-gray-300 placeholder-[#030303] dark:placeholder-[#ededed]`}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default SettingsMenu;
