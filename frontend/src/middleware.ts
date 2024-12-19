import { NextRequest, NextResponse } from 'next/server';

const currencyByCountry: Record<string, string> = {
  US: 'USD',
  FR: 'EUR',
  IN: 'INR',
};

export async function middleware(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for') || '';
  const ip = forwardedFor.split(',')[0].trim() || '127.0.0.1';
  console.log('Detected IP:', ip);

  // Получаем данные геолокации с помощью внешнего API
  let country = 'US'; // Default
  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoRes.json();
    console.log('External Geo Data:', geoData);

    if (geoData && geoData.country_code) {
      country = geoData.country_code;
    }
  } catch (error) {
    console.error('Failed to fetch geo data:', error);
  }

  const currency = currencyByCountry[country] || 'USD';
  console.log('Currency based on country:', currency);

  const response = NextResponse.next();
  response.cookies.set('currency', currency);

  console.log('Response cookies set:', response.cookies.getAll());
  return response;
}

export const config = {
  matcher: '/',
};
