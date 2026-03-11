## Short description

A modern, responsive weather dashboard application built with Next.js 15 and React 19. WonderWeather provides real-time weather information with a beautiful, customizable interface that adapts to your preferences.

## ✨ Features

- Real-Time Weather Data: Get current weather conditions for any city worldwide using the WeatherAPI
- Multiple Theme Options: Choose from 4 distinct themes:
  - Light Theme (Default)
  - Sun Theme
  - Sky Theme
  - Moon Theme
- Adjustable Font Sizes: Customize text size for better accessibility (Small, Medium, Large, Extra Large)
- Responsive Design: Optimized for desktop, tablet, and mobile devices
- Dashboard Layout: Organized navigation with settings and system settings pages
- Persistent Preferences: Your theme and font size choices are saved in local storage

## 🛠️ Technologies Used

- Next.js - React framework with App Router
- React - UI library
- Material-UI - Component library for beautiful UI elements
- Tailwind CSS - Utility-first CSS framework
- WeatherAPI - Real-time weather data provider

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/andrejkoller/wonderweather-frontend.git
cd wonderweather-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Weather API credentials:

```env
NEXT_PUBLIC_WEATHER_API_BASE_URL="https://api.weatherapi.com/v1/current.json"
NEXT_PUBLIC_WEATHER_API_KEY="your-api-key-here"
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔑 Getting an API Key

This application uses the [Weather API](https://www.weatherapi.com). To get your free API key:

1. Visit [https://www.weatherapi.com](https://www.weatherapi.com)
2. Sign up for a free account
3. Generate your API key
4. Add it to your `.env.local` file

## 📸 Screenshots
