"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiBook, FiHeart, FiShoppingCart, FiSettings } from "react-icons/fi";
import SettingsMenu from "./SettingsMenu";
import { useTranslations } from "next-intl";

type MenuItem = "catalog" | "wishlist" | "cart" | "settings";

interface MenuItemType {
  key: MenuItem;
  label: string;
  icon: JSX.Element;
  href?: string; // Сделаем href опциональным, т.к. для settings не будет href
}

const BottomNav: React.FC = () => {
  const t = useTranslations("bottomNav");

  const menuItems: MenuItemType[] = [
    {
      key: "catalog",
      label: t("catalog"),
      icon: <FiBook size={28} />,
      href: "/catalog",
    },
    {
      key: "wishlist",
      label: t("wishlist"),
      icon: <FiHeart size={28} />,
      href: "/wishlist",
    },
    {
      key: "cart",
      label: t("cart"),
      icon: <FiShoppingCart size={28} />,
      href: "/cart",
    },
    {
      key: "settings",
      label: t("settings"),
      icon: <FiSettings size={28} />,
    },
  ];

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className="
          fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 bg-background
          shadow-[0_-4px_45px_rgba(0,0,0,0.05)] z-50
          block lg:hidden
        "
      >
        {menuItems.map((item) => {
          if (item.key === "settings") {
            return (
              <button
                key={item.key}
                onClick={handleSettingsClick}
                className="flex flex-col items-center text-center focus:outline-none"
                aria-label={item.label}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          }

          // Остальные пункты - ссылки
          return (
            <Link
              href={item.href!}
              key={item.key}
              className="flex flex-col items-center text-center"
              aria-label={item.label}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {isSettingsOpen && <SettingsMenu onClose={() => setIsSettingsOpen(false)} />}
    </>
  );
};

export default BottomNav;
