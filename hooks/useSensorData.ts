import { useState, useEffect, useCallback } from "react";
import {
  SensorData,
  subscribeToSensorData,
  writeSensorData,
} from "@/lib/firebase";

export const useSensorData = () => {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToSensorData((data) => {
      setSensorData(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const simulateSensorData = useCallback(async () => {
    try {
      const simulatedData: SensorData = {
        humidity: Math.floor(Math.random() * 50) + 30, // 30-80%
        temperature: Math.floor(Math.random() * 10) + 23, // 23-32°C
        timestamp: Date.now(),
      };

      await writeSensorData(simulatedData);
      console.log("Simulated sensor data written:", simulatedData);
    } catch (error) {
      console.error("Error simulating sensor data:", error);
      setError("Gagal mensimulasikan data sensor");
    }
  }, []);

  return {
    sensorData,
    loading,
    error,
    simulateSensorData,
  };
};
