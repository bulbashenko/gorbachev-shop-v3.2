// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        // Определяем геолокацию через ipapi.co
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Failed to fetch geo data');
        const data = await res.json();
        console.log('Geo data fetched:', data);

        // Устанавливаем полученные данные в состояние
        setGeoData(data);
      } catch (err: any) {
        console.error('Error fetching geo data:', err.message);
        setError(err.message);
      }
    };

    fetchGeoData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="font-bold text-4xl">Геолокация</h1>
      {error ? (
        <p className="text-red-500">Ошибка: {error}</p>
      ) : geoData ? (
        <div className="text-center">
          <p>IP: {geoData.ip}</p>
          <p>Страна: {geoData.country_name}</p>
          <p>Валюта: {geoData.currency}</p>
        </div>
      ) : (
        <p>Загрузка данных о геолокации...</p>
      )}
    </div>
  );
};

export default HomePage;
