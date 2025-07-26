import { useState } from 'react'
import Taskbar from './components/Taskbar'
import './App.css'

function App() {
  return (
    <>
      <main className="min-h-screen w-screen bg-gray-800">screen</main>

      <footer className="fixed bottom-0 w-full">
        <Taskbar />
      </footer>
    </>
  )
}

export default App
