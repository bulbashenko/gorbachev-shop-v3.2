// src/app/page.tsx
'use client';

import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';
import { useCurrency } from '@/hooks/useCurrency';

const HomePage: React.FC = () => {
  const t = useTranslations();
  useCurrency();
  const currency = useSelector((state: RootState) => state.currency.currency);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className='font-bold text-4xl'>{t("hello")}</h1>
      {t("welcome")}
      {currency}
    </div>
  );
};

export default HomePage;
