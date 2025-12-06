"use client";
import { Header } from "@/components/header";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "@/components/menu";
import { ThemeProvider } from "@/providers/theme-provider";
import { FontSizeProvider } from "@/providers/font-size-provider";

export default function ClientLayout({ children }) {
  const [cityName, setCityName] = useState("New York");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <ThemeProvider>
      <FontSizeProvider>
        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        {!isHomePage && (
          <Header
            cityName={cityName}
            onMenuOpenClick={() => setIsMenuOpen(true)}
          />
        )}
        <main className="h-[calc(100%-96px)] w-full px-2">{children}</main>
      </FontSizeProvider>
    </ThemeProvider>
  );
}
