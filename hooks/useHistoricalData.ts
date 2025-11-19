import { useState, useEffect, useCallback } from "react";
import {
  HistoricalData,
  HistoricalEntry,
  readHistoricalData,
  writeHistoricalData,
} from "@/lib/firebase";

export const useHistoricalData = () => {
  const [historicalData, setHistoricalData] = useState<HistoricalData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistoricalData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await readHistoricalData();
      setHistoricalData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching historical data:", error);
      setError("Gagal mengambil data historis");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistoricalData();
  }, [fetchHistoricalData]);

  const addHistoricalData = useCallback(
    async (humidity: number, temperature: number) => {
      try {
        const today = new Date().toISOString().split("T")[0];
        await writeHistoricalData({
          date: today,
          humidity,
          temperature,
        });

        // Refresh data after adding
        await fetchHistoricalData();
      } catch (error) {
        console.error("Error adding historical data:", error);
        setError("Gagal menambahkan data historis");
      }
    },
    [fetchHistoricalData]
  );

  const processHistoricalData = useCallback((): HistoricalEntry[] => {
    if (!historicalData) return [];

    return Object.entries(historicalData)
      .map(([date, values]) => ({
        date: new Date(date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
        }),
        humidity: values.humidity,
        temperature: values.temperature,
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-7); // Get last 7 days
  }, [historicalData]);

  const generateSampleHistoricalData = useCallback(async () => {
    try {
      const today = new Date();
      const sampleData = [];

      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split("T")[0];

        const humidity = Math.floor(Math.random() * 30) + 35; // 35-65%
        const temperature = Math.floor(Math.random() * 8) + 25; // 25-32°C

        await writeHistoricalData({
          date: dateStr,
          humidity,
          temperature,
        });

        sampleData.push({ date: dateStr, humidity, temperature });
      }

      console.log("Sample historical data generated:", sampleData);
      await fetchHistoricalData();
    } catch (error) {
      console.error("Error generating sample data:", error);
      setError("Gagal membuat data sampel");
    }
  }, [fetchHistoricalData]);

  return {
    historicalData,
    loading,
    error,
    fetchHistoricalData,
    addHistoricalData,
    processHistoricalData,
    generateSampleHistoricalData,
  };
};
