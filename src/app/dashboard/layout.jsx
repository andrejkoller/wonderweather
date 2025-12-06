"use client";

import { Header } from "@/components/header";
import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  useTheme();
  const [cityName, setCityName] = useState("New York");

  useEffect(() => {
    const storedCityName = localStorage.getItem("cityName") || "New York";
    setCityName(storedCityName);

    const handleStorageChange = () => {
      const updatedCityName = localStorage.getItem("cityName") || "New York";
      setCityName(updatedCityName);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="h-full w-full">
      <div className="header">
        <Header cityName={cityName} />
      </div>
      <div className="d-body">{children}</div>
    </div>
  );
}
