'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrency } from '@/store/slices/currencySlice';

export function useCurrency() {
  const dispatch = useDispatch();

  useEffect(() => {
    const currency = document.cookie
      .split('; ')
      .find((row) => row.startsWith('currency='))
      ?.split('=')[1];

    if (currency) {
      dispatch(setCurrency(currency));
    }
  }, [dispatch]);
}
