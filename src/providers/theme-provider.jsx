"use client";

import { useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/theme-context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-theme");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedTheme = localStorage.getItem("theme") || "light-theme";
      setTheme(storedTheme);
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme, isClient]);

  const setLightTheme = () => setTheme("light-theme");
  const setSunTheme = () => setTheme("sun-theme");
  const setSkyTheme = () => setTheme("sky-theme");
  const setMoonTheme = () => setTheme("moon-theme");

  return (
    <ThemeContext.Provider
      value={{ theme, setLightTheme, setSunTheme, setSkyTheme, setMoonTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
