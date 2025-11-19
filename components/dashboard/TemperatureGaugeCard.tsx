import { Lightbulb } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import GaugeDisplay from "./GaugeDisplay";
import ProgressBarSection from "./ProgressBarSection";
import ChartSection from "./ChartSection";

interface TemperatureGaugeCardProps {
  gaugeTemperature: number;
  temperaturePercentage: number;
  temperatureData: Array<{ date: string; value: number }>;
}

export default function TemperatureGaugeCard({
  gaugeTemperature,
  temperaturePercentage,
  temperatureData,
}: TemperatureGaugeCardProps) {
  return (
    <Card className="border-2">
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
          maxValue={38}
          label={`${gaugeTemperature}°C`}
          status="Normal"
          statusColor="text-lime-600"
          gaugeColor="#84cc16"
        />

        {/* Alert */}
        <Alert className="bg-yellow-50 border-yellow-200">
          <Lightbulb className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-xs sm:text-sm text-yellow-800">
            <span className="font-semibold">Rekomendasi : </span> Kondisi baik,
            tidak perlu tindakan.
          </AlertDescription>
        </Alert>

        {/* Progress Bar */}
        <ProgressBarSection
          label="Temperature Level"
          currentValue={gaugeTemperature}
          minValue={20}
          maxValue={38}
          unit="°C"
          percentage={temperaturePercentage}
          color="text-lime-600"
          progressBarClass="[&>div]:bg-lime-500"
        />

        {/* Chart */}
        <ChartSection
          title="Temperature (°C) - Per 7 Day"
          data={temperatureData}
          color="#84cc16"
          minDomain={26}
          maxDomain={32}
        />
      </CardContent>
    </Card>
  );
}
