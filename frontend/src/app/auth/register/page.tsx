'use client';

import { useLocale } from "next-intl";
import { dm_mono, pt_mono } from '../../utils/fontConfig';
import Link from "next/link";
import { FaRegSquareCheck, FaRegSquare } from "react-icons/fa6";
import { useState } from "react";

export default function RegisterPage() {
  const locale = useLocale();
  const monoFont = locale === 'ru' || locale === 'en' ? pt_mono : dm_mono;

  // State for the checkbox
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="min-h-screen flex flex-col items-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">REGISTER</h1>
            <form className="w-full grid grid-cols-1 gap-6">
              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              {/* Confirm Password */}
              <input
                type="password"
                placeholder="Confirm Password"
                className={`${monoFont.className} w-full px-4 py-3 border border-[#030303] dark:border-[#ededed] rounded-[6px] bg-transparent focus:outline-none placeholder-[#030303] dark:placeholder-[#ededed]`}
              />
              {/* Subscription Checkbox */}
              <div className="flex items-start gap-2">
                <div
                  className="cursor-pointer text-2xl"
                  onClick={() => setIsSubscribed(!isSubscribed)}
                >
                  {isSubscribed ? <FaRegSquareCheck className="w-5 h-5"/> : <FaRegSquare className="w-5 h-5" />}
                </div>
                <div className={`${monoFont.className} text-sm`}>
                  I want to receive promotional offers, customized new arrivals, trends, and promotions.
                </div>
              </div>
              {/* Agreement Notice */}
              <div className="flex items-start gap-2">
                <div className="w-9 h-9"></div>
                <div className={`${monoFont.className} text-sm`}>
                  By registering, you automatically agree to the{' '}
                  <span className="underline">terms of the agreement</span> and our{' '}
                  <span className="underline">privacy policy</span>.
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-col items-center gap-4 mt-6">
                {/* Register Button */}
                <button
                  type="submit"
                  className={`w-full px-6 py-3 bg-foreground text-background rounded-[6px] focus:outline-none`}
                >
                  Register
                </button>
                {/* Log In Button */}
                <Link
                  type="button"
                  href="/auth/login"
                  className={`text-center w-full px-6 py-3 border border-foreground text-foreground bg-transparent rounded-[6px] focus:outline-none`}
                >
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
