// StartMenu.tsx
import React, { useRef, useEffect } from "react";
const API_KEY = import.meta.env.WEATHER_API_KEY;

export default function WeatherApp({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-1/2 left-1/2 w-[25%] h-1/2 bg-white shadow-2xl rounded-2xl z-40
        transform transition-transform duration-150 ease-in-out
        ${
          isOpen
            ? "-translate-x-1/2 -translate-y-[15%]"
            : "-translate-x-1/2 translate-y-full"
        }
      `}
    >
      <div className="p-4">
        <p>todo</p>
      </div>
    </div>
  );
}
