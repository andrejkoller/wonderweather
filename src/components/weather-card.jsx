import { useWeatherData } from "@/hooks/use-weather-data";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import VisibilityIcon from "@mui/icons-material/Visibility";

const formatTemp = (temp) => {
  return temp >= 0 ? `+${temp}` : temp;
};

export const WeatherCard = () => {
  const { weatherData, loading, error } = useWeatherData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <div className="flex flex-col justify-center items-center">
          <p
            className="text-lg font-medium px-6 py-2.5 rounded-full"
            style={{
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            {weatherData.location?.localtime}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-medium">
            {weatherData.current?.condition?.text}
          </p>
        </div>
      </div>
      <div className="mr-5">
        <p className="font-medium relative">
          <span className="text-[10rem]">{weatherData.current?.temp_c}</span>
          <span className="absolute text-[8rem]">°</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 h-full w-full">
        <p className="text-xl font-bold">Daily Summary</p>
        <p className="text-lg">
          Now it feels like {formatTemp(weatherData.current?.feelslike_c)}°,
          actually {formatTemp(weatherData.current?.temp_c)}°. It feels{" "}
          {weatherData.current?.temp_c > 25 && "hot"}
          {weatherData.current?.temp_c >= 15 &&
            weatherData.current?.temp_c <= 25 &&
            "mild"}
          {weatherData.current?.temp_c < 15 && "cold"} because of the current
          season.
        </p>
      </div>
      <div
        className="flex flex-row justify-between items-center mt-6 w-full px-6 py-5 rounded"
        style={{
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <AirIcon sx={{ width: 32, height: 32 }} />
            <p className="text-lg">{weatherData.current?.wind_kph}</p>
          </div>
          <p className="text-sm">Wind</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <WaterDropIcon sx={{ width: 32, height: 32 }} />
            <p className="text-lg">{weatherData.current?.humidity}</p>
          </div>
          <p className="text-sm">Humidity</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <VisibilityIcon sx={{ width: 32, height: 32 }} />
            <p className="text-lg">{weatherData.current?.vis_km}</p>
          </div>
          <p className="text-sm">Visibility</p>
        </div>
      </div>
    </div>
  );
};
