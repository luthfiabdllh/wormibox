"use client";

import { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard/ui/DashboardHeader";
import DashboardTitle from "@/components/dashboard/ui/DashboardTitle";
import StatsCards from "@/components/dashboard/StatsCards";
import HumidityGaugeCard from "@/components/dashboard/HumidityGaugeCard";
import TemperatureGaugeCard from "@/components/dashboard/TemperatureGaugeCard";

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data for humidity chart
  const humidityData = [
    { date: "8 Nov", value: 38 },
    { date: "9 Nov", value: 37 },
    { date: "10 Nov", value: 48 },
    { date: "11 Nov", value: 36 },
    { date: "12 Nov", value: 44 },
  ];

  // Sample data for temperature chart
  const temperatureData = [
    { date: "8 Nov", value: 29 },
    { date: "9 Nov", value: 30 },
    { date: "10 Nov", value: 28 },
    { date: "11 Nov", value: 28 },
    { date: "12 Nov", value: 29 },
  ];

  const formatDateTime = (date: Date) => {
    return date
      .toLocaleString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "-");
  };

  const currentHumidity = 40;
  const currentTemperature = 27;

  // Humidity range: 0-100% with optimal 40-60%
  const humidityMin = 0;
  const humidityMax = 100;
  const humidityOptimalMin = 40;
  const humidityOptimalMax = 60;
  const humidityPercentage = Math.max(
    0,
    Math.min(100, (currentHumidity / humidityMax) * 100)
  );

  // Temperature range: 0-100°C with optimal 26-28°C
  const temperatureMin = 0;
  const temperatureMax = 100;
  const temperatureOptimalMin = 26;
  const temperatureOptimalMax = 28;
  const temperaturePercentage = Math.max(
    0,
    Math.min(100, (currentTemperature / temperatureMax) * 100)
  );

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader userEmail="user@example.com" onLogout={handleLogout} />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Title Section */}
        <DashboardTitle />

        {/* Stats Cards */}
        <StatsCards
          currentHumidity={currentHumidity}
          currentTemperature={currentTemperature}
          currentTime={formatDateTime(currentTime)}
        />

        {/* Gauge Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          <HumidityGaugeCard
            gaugeHumidity={currentHumidity}
            humidityPercentage={humidityPercentage}
            humidityData={humidityData}
            humidityMin={humidityMin}
            humidityMax={humidityMax}
            humidityOptimalMin={humidityOptimalMin}
            humidityOptimalMax={humidityOptimalMax}
          />
          <TemperatureGaugeCard
            gaugeTemperature={currentTemperature}
            temperaturePercentage={temperaturePercentage}
            temperatureData={temperatureData}
            temperatureMin={temperatureMin}
            temperatureMax={temperatureMax}
            temperatureOptimalMin={temperatureOptimalMin}
            temperatureOptimalMax={temperatureOptimalMax}
          />
        </div>
      </main>
    </div>
  );
}
