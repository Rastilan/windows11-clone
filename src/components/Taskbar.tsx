import React, { useState, useEffect } from "react";
import StartMenu from "./StartMenu";
import WeatherApp from "./WeatherApp";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



function Taskbar() {
const [menuOpen, setStartMenuOpen] = useState(false);
const [weatherAppOpen, setWeatherAppOpen] = useState(false);

    // TO DO: Add a function to change each color of the Windows Logo. Maybe make it a hidden feature?
    const [squareColors, setSquareColors] = useState([
        "#3B82F6", "#3B82F6", "#3B82F6", "#3B82F6",
    ]);
    const [weather, setWeather] =  useState<{
        temperature?: number;
        city?: string;
        icon?: string;
        condition?: string;
    }>({});

    useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`
          );
          console.log(response)
          const data = await response.json();
          setWeather({
            temperature: Math.round(data.current.temp_f),
            city: data.location.name,
            condition: data.current.condition.text,
            icon: data.current.condition.icon.startsWith("http")
            ? data.current.condition.icon 
            : `https:${data.current.condition.icon}`,
          });
        } catch (error) {
          console.error("Error fetching weather:", error);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  }, []);


    return (
    <div className="h-[5vh] w-screen bg-black/40 flex items-center justify-between px-4 z-50">
        {/* Left side */}
        <section className="flex-shrink-0 text-sm text-white">
            <div onClick={() => setWeatherAppOpen((open) => !open)} 
            className="
                relative inline-block w-[100px] h-[100%] text-center
                cursor-pointer   
                hover:bg-white/10
                ">
                {weather.temperature !== undefined
                ? `${weather.temperature}°F`
                : "Loading..."}
                

            </div>
        </section>

        {/* Center */}
        <section className="flex-1 flex justify-center items-center h-full">
            <div
            onClick={() => setStartMenuOpen((open) => !open)}
            tabIndex={0}
            className="
                h-[70%] aspect-square p-[0.55vh] grid grid-cols-2 grid-rows-2 gap-[1px]
                bg-transparent rounded-md cursor-pointer transition
                hover:bg-white/10
            "
            >
              {squareColors.map((color, i) => (
                <div
                    key={i}
                    style={{ backgroundColor: color }}
                    className="w-full h-full"
                    />
                ))}
            </div>
        </section>

        {/* Right side */}
        <section className="flex-shrink-0 text-sm text-white">
            More icons – apps – time
        </section>

        {/* StartMenu */}
        <StartMenu isOpen={menuOpen} onClose={() => setStartMenuOpen(false)} />

        {/* WeatherApp */}
        <WeatherApp isOpen={weatherAppOpen} onClose={() => setWeatherAppOpen(false)} />
    </div>
)}

export default Taskbar;