"use client";

import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { WeatherCard } from "@/components/weather-card";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <div className="h-full w-full">
      <div className="d-body">
        <div className="dashboard flex flex-start justify-start items-center h-full m-auto">
          <div className="flex flex-col justify-start items-center h-full w-full">
            <WeatherCard />
          </div>
        </div>
      </div>
    </div>
  );
}
