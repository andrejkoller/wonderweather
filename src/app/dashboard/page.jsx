"use client";

import React from "react";
import { WeatherCard } from "@/components/weather-card";
import { useFontSize } from "@/hooks/use-font-size";

export default function Page() {
  useFontSize();

  return (
    <div className="dashboard flex flex-start justify-start items-center h-full w-10/12 m-auto">
      <div className="flex flex-col justify-start items-center h-full w-full">
        <WeatherCard />
      </div>
    </div>
  );
}
