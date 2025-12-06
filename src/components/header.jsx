"use client";

import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import { usePathname } from "next/navigation";

export const ICON_SIZE = 40;

export const Header = ({ cityName, onMenuOpenClick }) => {
  const pathname = usePathname();

  const isDashboardPage = pathname === "/dashboard";
  const isSettingsPage = pathname === "/settings";

  return (
    <div className="flex flex-row justify-between items-center h-24 w-full">
      <div id="menuIcon" className="cursor-pointer" onClick={onMenuOpenClick}>
        <MenuIcon sx={{ fontSize: ICON_SIZE }} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">
          {isDashboardPage && cityName} {isSettingsPage && "Settings"}
        </h2>
      </div>
      <div id="pathNameIcon">
        {isDashboardPage && <LocationOnIcon sx={{ fontSize: ICON_SIZE }} />}
        {isSettingsPage && <SettingsIcon sx={{ fontSize: ICON_SIZE }} />}
      </div>
    </div>
  );
};
