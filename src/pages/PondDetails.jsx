import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Polygon,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import PondGraph from "./PondGraph";
import { useNavigate } from "react-router-dom";


const PondDetails = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  const WEATHER_API_KEY = "f06c28466bd98b962ed2e94b9fd29598";

  // Fixed LatLong for your pond (you can define polygon around this or just marker)
  const pondCenter = [13.396210328591762, 75.00854277182263];

  // Example polygon around that lat-long (a small square for demo)
  const polygonCoords = [
    [13.397022064273894, 75.00766664743425],
    [13.397282986185758, 75.00775784254076],
    [13.397403010170198, 75.00792950391771],
    [13.397423883900503, 75.00818699598314],
    [13.397418665468093, 75.00868588685991],
    [13.39717339901725, 75.00891655683519],
    [13.396395850530729, 75.00918477773668],
    [13.395245178528182, 75.00931620597841],
    [13.395018174558002, 75.00928133726121],
    [13.39485640148303, 75.00821381807329],
    [13.394945115763417, 75.00802606344224],
    [13.395320846470646, 75.00782221555711],
    [13.395800945964863, 75.00772029161455],
    [13.396291481415052, 75.0076934695244],
    [13.397022064273894, 75.00766664743425], // closing the polygon by repeating the first point
  ];


  // City name for weather data - you can set as needed
  const cityName = "varanga"; // You can adjust or get dynamically

  useEffect(() => {
    const fetchWeatherData = async (city) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}`
        );

        const uniqueForecastDays = [];
        const sixDaysData = response.data.list.filter((day) => {
          const date = new Date(day.dt_txt).getDate();
          if (!uniqueForecastDays.includes(date)) {
            uniqueForecastDays.push(date);
            return true;
          }
          return false;
        });

        setWeatherData(sixDaysData);
        setLoadingWeather(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoadingWeather(false);
      }
    };

    fetchWeatherData(cityName);
  }, [cityName]);

  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      navigate("/");
    }

  }

  return (
    <div className="p-4 w-full">
      {/* Title Section */}

      <div className="flex justify-end">
        <button
          className="flex gap-2 bg-red-400 text-white rounded-md px-2 py-1 shadow hover:bg-red-300 transition-transform duration-200"
          onClick={handleLogout}
        >
          {/* <IoArrowBack className="text-lg" /> */}
          Log Out
        </button>
      </div>

      <div className="flex items-center w-full max-w-7xl mt-4">
        <div className="bg-white px-6 py-3 text-base font-semibold shadow-md rounded-lg mb-4">
          Pond Details
        </div>
        <div className="flex-grow border-t border-gray-800 mx-2"></div>
        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
      </div>

      {/* Back Button */}


      <div className="flex flex-wrap gap-4 items-start mt-5">
        {/* Map Section */}
        <div className="h-[400px] w-full xl:w-3/5 relative rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={pondCenter}
            zoom={17}
            style={{ height: "100%", width: "100%" }}
          >
            <LayersControl position="topright">
              <LayersControl.BaseLayer name="Default View">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Satellite View" checked>
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution="© Esri"
                />
              </LayersControl.BaseLayer>
            </LayersControl>


            {/* Polygon around pond */}
            <Polygon
              positions={polygonCoords}
              pathOptions={{
                color: "red",
                weight: 2,
                opacity: 1,
                fill: false,
              }}
            />

            {/* Optional: Marker at center */}
            <Marker position={pondCenter}>
              <Popup>Pond Center</Popup>
            </Marker>
          </MapContainer> 
        </div>


        {/* Weather Section */}
        <div className="w-96 h-[400px] xl:w-[38%] bg-gradient-to-r from-blue-600 to-blue-300 p-5 rounded-lg shadow-lg flex flex-col justify-between">
          <div className="text-center mb-2">
            <h3 className="text-2xl text-white">Today's Weather</h3>
            {/* <p className="text-white text-3xl mt-1 font-bold">{cityName}</p> */}
            <p className="text-white text-3xl mt-1 font-bold">Varanga</p>
          </div>

          {loadingWeather ? (
            <p className="text-white text-center">Loading weather data...</p>
          ) : weatherData && weatherData.length > 0 ? (
            <div className="flex flex-col items-center text-black gap-4">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}@2x.png`}
                alt="Weather Icon"
                className="w-28"
              />
              <div className="text-center">
                <p className="text-lg font-semibold">{weatherData[0].dt_txt.split(" ")[0]}</p>
                <p className="text-md">
                  {(weatherData[0].main.temp - 273.15).toFixed(2)} °C - {weatherData[0].weather[0].description}
                </p>
              </div>
              <div className="bg-white bg-opacity-20 px-8 py-2 rounded-lg shadow text-center">
                <p className="font-semibold">Humidity</p>
                <p className="text-xl">{weatherData[0].main.humidity} %</p>
              </div>
            </div>
          ) : (
            <p className="text-white">No weather data available.</p>
          )}
        </div>


      </div>

      {/* Graph Section */}
      <PondGraph />
    </div>
  );
};

export default PondDetails;
