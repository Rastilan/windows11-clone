// App.tsx
import { useState } from "react";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";
import "./App.css";

function App() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen w-screen bg-gray-800">screen</main>

      {/* StartMenu rendered at top-level, behind the Taskbar */}
      <StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
      />

      {/* Taskbar fixed at bottom with higher z-index */}
      <footer className="fixed bottom-0 w-full z-50">
        <Taskbar toggleStartMenu={() => setStartMenuOpen((open) => !open)} />
      </footer>
    </>
  );
}

export default App;
