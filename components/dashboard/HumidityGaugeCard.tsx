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

interface HumidityGaugeCardProps {
  gaugeHumidity: number;
  humidityPercentage: number;
  humidityData: Array<{ date: string; value: number }>;
}

export default function HumidityGaugeCard({
  gaugeHumidity,
  humidityPercentage,
  humidityData,
}: HumidityGaugeCardProps) {
  return (
    <Card className="border-2">
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
          maxValue={100}
          label={`${gaugeHumidity}%`}
          status="Rendah"
          statusColor="text-orange-600"
          gaugeColor="#fb923c"
        />

        {/* Alert */}
        <Alert className="bg-yellow-50 border-yellow-200">
          <Lightbulb className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-xs sm:text-sm text-yellow-800">
            <span className="font-semibold">Rekomendasi : </span> Perlu ditingkatkan untuk pertumbuhan optimal
          </AlertDescription>
        </Alert>

        {/* Progress Bar */}
        <ProgressBarSection
          label="Humidity Level"
          currentValue={gaugeHumidity}
          minValue={40}
          maxValue={80}
          unit="%"
          percentage={humidityPercentage}
          color="text-orange-600"
        />

        {/* Chart */}
        <ChartSection
          title="Humidity (%) - Per 7 Day"
          data={humidityData}
          color="#fb923c"
          minDomain={35}
          maxDomain={65}
        />
      </CardContent>
    </Card>
  );
}
