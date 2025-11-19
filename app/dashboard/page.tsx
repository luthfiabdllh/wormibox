"use client";

import { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTitle from "@/components/dashboard/DashboardTitle";
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

  const currentHumidity = 40.6;
  const currentTemperature = 29;
  const gaugeHumidity = 39;
  const gaugeTemperature = 27;

  // Humidity range: 40% (min) to 80% (max)
  const humidityMin = 40;
  const humidityMax = 80;
  const humidityPercentage = Math.max(
    0,
    Math.min(
      100,
      ((gaugeHumidity - humidityMin) / (humidityMax - humidityMin)) * 100
    )
  );

  // Temperature range: 20°C (min) to 38°C (max)
  const temperatureMin = 20;
  const temperatureMax = 38;
  const temperaturePercentage = Math.max(
    0,
    Math.min(
      100,
      ((gaugeTemperature - temperatureMin) /
        (temperatureMax - temperatureMin)) *
        100
    )
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
            gaugeHumidity={gaugeHumidity}
            humidityPercentage={humidityPercentage}
            humidityData={humidityData}
          />
          <TemperatureGaugeCard
            gaugeTemperature={gaugeTemperature}
            temperaturePercentage={temperaturePercentage}
            temperatureData={temperatureData}
          />
        </div>
      </main>
    </div>
  );
}
