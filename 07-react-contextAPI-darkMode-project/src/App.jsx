import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect } from "react";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  // Create state for button
  const [themeMode, setThemeMode] = useState("light");

  // Dark mode functionality
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Light mode functionality
  const lightTheme = () => {
    setThemeMode("light");
  };

  // UseEffect method to change the theme
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
