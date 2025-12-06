"use client";

import { useTheme } from "@/contexts/theme-context";
import { SettingsButton } from "@/components/settings-button";
import BoltIcon from "@mui/icons-material/Bolt";
import SunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import BedtimeIcon from "@mui/icons-material/Bedtime";

export const ThemeChange = () => {
  const { theme, setLightTheme, setSunTheme, setSkyTheme, setMoonTheme } =
    useTheme();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <SettingsButton
          disabled={theme === "light-theme"}
          onClick={setLightTheme}
        >
          <BoltIcon />
        </SettingsButton>
        <SettingsButton disabled={theme === "sun-theme"} onClick={setSunTheme}>
          <SunnyIcon />
        </SettingsButton>
        <SettingsButton disabled={theme === "sky-theme"} onClick={setSkyTheme}>
          <CloudIcon />
        </SettingsButton>
        <SettingsButton
          disabled={theme === "moon-theme"}
          onClick={setMoonTheme}
        >
          <BedtimeIcon />
        </SettingsButton>
      </div>
    </div>
  );
};
