'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { RootState } from '@/store';
import { setCurrency } from '@/store/slices/currencySlice';
import { fallbackCurrency } from '@/utils/getCurrencyByLocation';

interface CurrencyProviderProps {
  children: ReactNode;
}

const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  console.log('[CurrencyProvider] Rendered');
  return (
    <Provider store={store}>
      <CurrencyInitializer>{children}</CurrencyInitializer>
    </Provider>
  );
};

interface CurrencyInitializerProps {
  children: ReactNode;
}

const CurrencyInitializer: React.FC<CurrencyInitializerProps> = ({ children }) => {
  const currencyFromRedux = useSelector((state: RootState) => state.currency.currency);
  const dispatch = useDispatch();
  const [currency, setCurrencyState] = useState(currencyFromRedux);

  console.log('[CurrencyInitializer] Current currency from Redux:', currencyFromRedux);

  useEffect(() => {
    console.log('[CurrencyInitializer] useEffect triggered');

    if (!currency) {
      console.log('[CurrencyInitializer] No currency set. Determining currency...');
      fallbackCurrency()
        .then((detectedCurrency) => {
          console.log('[CurrencyInitializer] Detected currency:', detectedCurrency);
          dispatch(setCurrency(detectedCurrency));
          setCurrencyState(detectedCurrency);
        })
        .catch((error) => {
          console.error('[CurrencyInitializer] Error detecting currency:', error);
        });
    } else {
      console.log('[CurrencyInitializer] Currency already set:', currency);
    }
  }, [currency, dispatch]);

  console.log('[CurrencyInitializer] Final currency:', currency);

  return <>{children}</>;
};

export default CurrencyProvider;
