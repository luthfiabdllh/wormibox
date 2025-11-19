import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";
import GaugeDisplay from "./ui/GaugeDisplay";
import ProgressBarSection from "./ui/ProgressBarSection";
import ChartSection from "./ui/ChartSection";

interface TemperatureGaugeCardProps {
  gaugeTemperature: number;
  temperaturePercentage: number;
  temperatureData: Array<{ date: string; value: number }>;
  temperatureMin: number;
  temperatureMax: number;
  temperatureOptimalMin: number;
  temperatureOptimalMax: number;
}

export default function TemperatureGaugeCard({
  gaugeTemperature,
  temperaturePercentage,
  temperatureData,
  temperatureMin,
  temperatureMax,
  temperatureOptimalMin,
  temperatureOptimalMax,
}: TemperatureGaugeCardProps) {
  // Determine status based on optimal range
  const getStatus = () => {
    if (gaugeTemperature < temperatureOptimalMin)
      return { text: "Rendah", color: "text-blue-600" };
    if (gaugeTemperature > temperatureOptimalMax)
      return { text: "Tinggi", color: "text-red-600" };
    return { text: "Optimal", color: "text-lime-600" };
  };

  // Get alert message based on status
  const getAlert = () => {
    if (gaugeTemperature < temperatureOptimalMin) {
      return {
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        iconColor: "text-blue-600",
        textColor: "text-blue-800",
        message: `Suhu di bawah optimal (${temperatureOptimalMin}-${temperatureOptimalMax}°C). Tingkatkan suhu untuk pertumbuhan optimal.`,
      };
    }
    if (gaugeTemperature > temperatureOptimalMax) {
      return {
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        iconColor: "text-red-600",
        textColor: "text-red-800",
        message: `Suhu di atas optimal (${temperatureOptimalMin}-${temperatureOptimalMax}°C). Turunkan suhu untuk menghindari masalah.`,
      };
    }
    return {
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      textColor: "text-green-800",
      message: `Suhu dalam kondisi optimal (${temperatureOptimalMin}-${temperatureOptimalMax}°C). Pertahankan kondisi ini.`,
    };
  };

  const status = getStatus();
  const alert = getAlert();

  return (
    <Card className="border-2 rounded-3xl">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl text-emerald-800">
          Gauge Temperature
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Current temperature level monitoring
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        {/* Gauge Display */}
        <GaugeDisplay
          value={gaugeTemperature}
          maxValue={temperatureMax}
          minValue={temperatureMin}
          label={`${gaugeTemperature}°C`}
          status={status.text}
          statusColor={status.color}
          gaugeColor="#84cc16"
        />

        {/* Alert */}
        <Alert className={`${alert.bgColor} ${alert.borderColor}`}>
          <Lightbulb className={`h-4 w-4 ${alert.iconColor}`} />
          <AlertDescription className={`text-xs sm:text-sm ${alert.textColor}`}>
            <span className="font-semibold">Rekomendasi: </span>
            {alert.message}
          </AlertDescription>
        </Alert>

        {/* Progress Bar */}
        <ProgressBarSection
          label="Temperature Level"
          currentValue={gaugeTemperature}
          minValue={temperatureMin}
          maxValue={temperatureMax}
          unit="°C"
          percentage={temperaturePercentage}
          color={status.color}
          optimalMin={temperatureOptimalMin}
          optimalMax={temperatureOptimalMax}
        />

        {/* Chart */}
        <ChartSection
          title="Temperature (°C) - Per 7 Day"
          data={temperatureData}
          color="#84cc16"
          minDomain={0}
          maxDomain={100}
        />
      </CardContent>
    </Card>
  );
}
