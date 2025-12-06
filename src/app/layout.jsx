import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { Header } from "@/components/header";
import ClientLayout from "./client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WonderWeather",
  description: "A weather app that shows the current weather in your city.",
  icons: {
    icon: "/icons/weather.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-auto`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
