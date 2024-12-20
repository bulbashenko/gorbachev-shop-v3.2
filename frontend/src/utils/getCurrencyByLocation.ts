// utils/getCurrencyByLocation.ts
export const getCurrencyByCoordinates = (latitude: number, longitude: number): string => {
  // Простая логика определения валюты по координатам
  if (longitude >= 14 && longitude <= 24 && latitude >= 48 && latitude <= 51) {
    return "CZK"; // Чехия
  }
  if (longitude >= 16 && longitude <= 20 && latitude >= 45 && latitude <= 48) {
    return "HUF"; // Венгрия
  }
  if (longitude >= 30 && longitude <= 180 && latitude >= 41 && latitude <= 82) {
    return "RUB"; // Россия (примерный диапазон)
  }
  return "EUR"; // Дефолтная валюта для Европы
};

// Fallback логика для определения валюты
export const fallbackCurrency = async (): Promise<string> => {
  if (!navigator.geolocation) {
    console.warn("Geolocation is not supported by this browser.");
    return "EUR"; // Дефолтная валюта
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("User coordinates:", { latitude, longitude });
        const currency = getCurrencyByCoordinates(latitude, longitude);
        console.log("Detected currency:", currency);
        resolve(currency);
      },
      () => {
        console.warn("Could not retrieve geolocation.");
        resolve("EUR"); // Дефолтная валюта
      }
    );
  });
};
