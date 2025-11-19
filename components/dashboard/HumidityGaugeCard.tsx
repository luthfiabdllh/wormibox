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

interface HumidityGaugeCardProps {
  gaugeHumidity: number;
  humidityPercentage: number;
  humidityData: Array<{ date: string; value: number }>;
  humidityMin: number;
  humidityMax: number;
  humidityOptimalMin: number;
  humidityOptimalMax: number;
}

export default function HumidityGaugeCard({
  gaugeHumidity,
  humidityPercentage,
  humidityData,
  humidityMin,
  humidityMax,
  humidityOptimalMin,
  humidityOptimalMax,
}: HumidityGaugeCardProps) {
  // Determine status based on optimal range
  const getStatus = () => {
    if (gaugeHumidity < humidityOptimalMin)
      return { text: "Rendah", color: "text-orange-600" };
    if (gaugeHumidity > humidityOptimalMax)
      return { text: "Tinggi", color: "text-red-600" };
    return { text: "Optimal", color: "text-lime-600" };
  };

  // Get alert message based on status
  const getAlert = () => {
    if (gaugeHumidity < humidityOptimalMin) {
      return {
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        iconColor: "text-yellow-600",
        textColor: "text-yellow-800",
        message: `Kelembaban di bawah optimal (${humidityOptimalMin}-${humidityOptimalMax}%). Tingkatkan kelembaban untuk pertumbuhan optimal.`,
      };
    }
    if (gaugeHumidity > humidityOptimalMax) {
      return {
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        iconColor: "text-red-600",
        textColor: "text-red-800",
        message: `Kelembaban di atas optimal (${humidityOptimalMin}-${humidityOptimalMax}%). Kurangi kelembaban untuk menghindari masalah.`,
      };
    }
    return {
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      textColor: "text-green-800",
      message: `Kelembaban dalam kondisi optimal (${humidityOptimalMin}-${humidityOptimalMax}%). Pertahankan kondisi ini.`,
    };
  };

  const status = getStatus();
  const alert = getAlert();

  return (
    <Card className="border-2 rounded-3xl">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl text-emerald-800">
          Gauge Humidity
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Current humidity level monitoring
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        {/* Gauge Display */}
        <GaugeDisplay
          value={gaugeHumidity}
          maxValue={humidityMax}
          minValue={humidityMin}
          label={`${gaugeHumidity}%`}
          status={status.text}
          statusColor={status.color}
          gaugeColor="#fb923c"
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
          label="Humidity Level"
          currentValue={gaugeHumidity}
          minValue={humidityMin}
          maxValue={humidityMax}
          unit="%"
          percentage={humidityPercentage}
          color={status.color}
          optimalMin={humidityOptimalMin}
          optimalMax={humidityOptimalMax}
        />

        {/* Chart */}
        <ChartSection
          title="Humidity (%) - Per 7 Day"
          data={humidityData}
          color="#fb923c"
          minDomain={0}
          maxDomain={100}
        />
      </CardContent>
    </Card>
  );
}
