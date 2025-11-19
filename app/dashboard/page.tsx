"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";
import DashboardHeader from "@/components/dashboard/ui/DashboardHeader";
import DashboardTitle from "@/components/dashboard/ui/DashboardTitle";
import StatsCards from "@/components/dashboard/StatsCards";
import HumidityGaugeCard from "@/components/dashboard/HumidityGaugeCard";
import TemperatureGaugeCard from "@/components/dashboard/TemperatureGaugeCard";
import { logoutUser, onAuthStateChanged } from "@/lib/firebase";
import { useSensorData } from "@/hooks/useSensorData";
import { useHistoricalData } from "@/hooks/useHistoricalData";

export default function DashboardPage() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const { sensorData } = useSensorData();
  const { processHistoricalData } = useHistoricalData();
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (!user) {
        router.push("/");
      } else {
        setUser(user);
        setAuthLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const processedData = processHistoricalData();
  const humidityData = processedData.map((item) => ({
    date: item.date,
    value: item.humidity,
  }));
  const temperatureData = processedData.map((item) => ({
    date: item.date,
    value: item.temperature,
  }));

  // Calculate trends
  const calculateTrend = (data: Array<{ value: number }>) => {
    if (data.length < 2) return { trend: 0, percentage: "0%" };

    const latest = data[data.length - 1].value;
    const previous = data[data.length - 2].value;
    const change = latest - previous;
    const percentage =
      previous !== 0 ? ((change / previous) * 100).toFixed(1) : "0";

    return {
      trend: change,
      percentage: change >= 0 ? `+${percentage}%` : `${percentage}%`,
    };
  };

  const humidityTrend = calculateTrend(humidityData);
  const temperatureTrend = calculateTrend(temperatureData);

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

  const currentHumidity = sensorData?.humidity || 40;
  const currentTemperature = sensorData?.temperature || 27;

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

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-800 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader userEmail={user.email || ""} onLogout={handleLogout} />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Title Section */}
        <DashboardTitle />

        {/* Stats Cards */}
        <StatsCards
          currentHumidity={currentHumidity}
          currentTemperature={currentTemperature}
          currentTime={formatDateTime(currentTime)}
          humidityTrend={humidityTrend}
          temperatureTrend={temperatureTrend}
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
