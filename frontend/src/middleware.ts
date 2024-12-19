import { NextRequest, NextResponse } from 'next/server';

const currencyByCountry: Record<string, string> = {
  US: 'USD',
  SK: 'EUR',
  RU: 'RUB',
  // Добавьте другие страны при необходимости
};

export async function middleware(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for') || '';
  const ip = forwardedFor.split(',')[0].trim();

  console.log('Detected IP:', ip);

  let country = 'US'; // По умолчанию
  let currency = 'USD';

  if (
    ip === '127.0.0.1' || 
    ip.startsWith('192.168.') || 
    ip.startsWith('10.') || 
    ip.startsWith('172.')
  ) {
    console.log('Reserved or local IP detected. Defaulting to US.');
  } else {
    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
      const geoData = await geoRes.json();
      console.log('Geo Data:', geoData);

      if (geoData && geoData.country_code) {
        country = geoData.country_code;
        currency = currencyByCountry[country] || 'USD';
      }
    } catch (error) {
      console.error('Failed to fetch geo data:', error);
    }
  }

  console.log('Country detected:', country);
  console.log('Currency set:', currency);

  // Устанавливаем cookie с валютой
  const response = NextResponse.next();
  response.cookies.set('currency', currency, { httpOnly: true, path: '/' });

  return response;
}

export const config = {
  matcher: '/',
};
