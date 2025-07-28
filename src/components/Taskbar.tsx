import React, { useState } from "react";
import StartMenu from "./StartMenu";
import WeatherApp from "./WeatherApp";

function Taskbar() {
    const [startMenuOpen, setStartMenuClose] = useState(false);
    const [startWeatherAppOpen, setWeatherAppClose] = useState(false);

    return (
    <div className="h-[5vh] w-screen bg-black/40 flex items-center justify-between px-4 z-50">
        {/* Left side */}
        <section className="flex-shrink-0 text-sm text-white">Weather App</section>

        {/* Center */}
        <section className="flex-1 flex justify-center items-center h-full">
            <div
            onClick={() => setStartMenuClose((open) => !open)}
            tabIndex={0}
            className="
                relative
                h-[70%] aspect-square p-[0.15vh] grid grid-cols-2 grid-rows-2 gap-[1px]
                bg-transparent rounded-md cursor-pointer transition
                hover:bg-white/10
            "
            >
            {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-blue-500 w-full h-full" />
            ))}
            </div>
        </section>

        {/* Right side */}
        <section className="flex-shrink-0 text-sm text-white">
            More icons – apps – time
        </section>

        {/* StartMenu */}
        <StartMenu isOpen={startMenuOpen} onClose={() => setStartMenuClose(false)} />

        {/* WeatherApp */}
        <WeatherApp isOpen={startWeatherAppOpen} onClose={() => setWeatherAppClose(false)} />
    </div>
)}

export default Taskbar;