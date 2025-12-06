const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL_CURRENT = process.env.NEXT_PUBLIC_WEATHER_API_BASE_URL;

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL_CURRENT}?key=${API_KEY}&q=${city}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
