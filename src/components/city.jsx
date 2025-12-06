"use client";

import { Button, FormControl, Input } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const City = () => {
  const router = useRouter();
  const [cityName, setCityName] = useState("");

  const handleCityName = () => {
    localStorage.setItem("cityName", cityName);
    window.dispatchEvent(new Event("storage"));
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-4 h-full w-full">
      <div className="h-full w-full">
        <FormControl className="w-full">
          <Input
            id="cityName"
            type="text"
            name="cityName"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Enter a city name"
            sx={{
              margin: 0,
              padding: "8px",
              borderWidth: 3,
              borderColor: "var(--foreground)",
              borderRadius: "4px",
              "&:before": { borderBottom: "none" },
              "&:after": { borderBottom: "none" },
              "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
              "&::placeholder": { color: "var(--foreground)" },
            }}
          />
        </FormControl>
      </div>
      <div className="w-full">
        <Button
          variant="contained"
          className="w-full"
          sx={{
            backgroundColor: "var(--foreground)",
            color: "var(--background)",
            fontFamily: "Geist",
            fontSize: "16px",
          }}
          onClick={handleCityName}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
