"use client";

import React, { useRef, useEffect } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageMenu from "../LanguageMenu";
import CurrencyMenu from "../CurrencyMenu";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { dm_mono } from "../../utils/fontConfig";
import { useTranslations } from "next-intl";

interface SettingsMenuProps {
  onClose: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ onClose }) => {
  const t = useTranslations("settingsMenu");
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрываем меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          <h2 className="text-xl font-semibold">{t("title")}</h2>
          <button onClick={onClose}>
            <AiOutlineClose className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {/* Переключатель темы */}
          <div className="flex items-center justify-between">
            <span>{t("theme")}:</span>
            <ThemeSwitcher />
          </div>

          {/* Переключатель языка */}
          <div className="flex items-center justify-between">
            <span>{t("language")}:</span>
            <LanguageMenu />
          </div>

          {/* Переключатель валюты */}
          <div className="flex items-center justify-between">
            <span>{t("currency")}:</span>
            <CurrencyMenu />
          </div>

          {/* Ссылка на аккаунт */}
          <div>
            <Link href="/auth" className="text-primary underline">
              {t("accountLink")}
            </Link>
          </div>

          {/* Поле для поиска */}
          <div>
            <input
              id="search"
              type="text"
              placeholder={t("searchPlaceholder")}
              className={`${dm_mono.className} text-sm w-full col-span-1 md:col-span-6 px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none focus:border-gray-300 placeholder-[#030303] dark:placeholder-[#ededed]`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsMenu;
