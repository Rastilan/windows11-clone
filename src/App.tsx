import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <main className="min-h-screen w-screen bg-gray-300">screen</main>

      <div className="fixed bottom-0 z-10 h-[5vh] w-screen bg-amber-400 flex items-center justify-between px-4">
        {/* Left side of task bar*/}
        <section className="text-left">Weather App</section>

        {/* Center of task bar */}
        <section className="absolute left-1/2 transform -translate-x-1/2">
          Windows Logo - Search - icons
        </section>

        {/* Right side of task bar */}
        <section className="text-right">More icons - apps - controls - time</section>
      </div>
    </>
  )
}

export default App
