"use client"
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { dm_mono, pt_mono } from '../../utils/fontConfig';
import Link from "next/link";
import { FaRegSquareCheck, FaRegSquare } from "react-icons/fa6";
import { useState } from "react";

export default function RegisterPage() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const monoFont = locale === 'ru' || locale === 'en' ? pt_mono : dm_mono;

  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="min-h-screen flex flex-col items-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">{t("register")}</h1>
            <form className="w-full grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder={t("firstName")}
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              <input
                type="text"
                placeholder={t("lastName")}
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              <input
                type="email"
                placeholder={t("email")}
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              <input
                type="password"
                placeholder={t("password")}
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              <input
                type="password"
                placeholder={t("confirmPassword")}
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              <div className="flex items-start gap-2">
                <div
                  className="cursor-pointer text-2xl"
                  onClick={() => setIsSubscribed(!isSubscribed)}
                >
                  {isSubscribed ? <FaRegSquareCheck className="w-5 h-5"/> : <FaRegSquare className="w-5 h-5" />}
                </div>
                <div className={`${monoFont.className} text-sm`}>
                  {t("subscribe")}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-9 h-9"></div>
                <div className={`${monoFont.className} text-sm`}>
                  {t("agreement")} <span className="underline">{t("termsOfAgreement")}</span> {t("privacyPolicy")}.
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 mt-6">
                <button
                  type="submit"
                  className={`w-full px-6 py-3 bg-foreground text-background rounded-[6px] focus:outline-none`}
                >
                  {t("register")}
                </button>
                <Link
                  type="button"
                  href="/auth/login"
                  className={`text-center w-full px-6 py-3 border border-foreground text-foreground bg-transparent rounded-[6px] focus:outline-none`}
                >
                  {t("logIn")}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
