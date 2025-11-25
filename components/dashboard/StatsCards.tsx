import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";

interface StatsCardsProps {
  currentHumidity: number;
  currentTemperature: number;
  temperatureTrend?: { trend: number; percentage: string };
}

export default function StatsCards({
  currentHumidity,
  currentTemperature,
  temperatureTrend,
}: StatsCardsProps) {
  const statsCards = [
    {
      title: "Humidity",
      value: `${currentHumidity}%`,
      trend: null,
      icon: null,
      trendValue: 0,
    },
    {
      title: "Temperature",
      value: `${currentTemperature}°C`,
      trend: temperatureTrend?.percentage || "0%",
      icon: (temperatureTrend?.trend ?? 0) >= 0 ? TrendingUp : TrendingDown,
      trendValue: temperatureTrend?.trend ?? 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
      {statsCards.map((card, index) => (
        <Card
          key={index}
          className="border-2 hover:shadow-lg transition-shadow sm:col-span-1 rounded-2xl"
        >
          <CardHeader className="pb-3">
            <div className="flex items-baseline justify-between">
              <CardDescription className="text-emerald-800 text-lg">
                {card.title}
              </CardDescription>
              {card.trend && card.icon && (
                <Badge
                  variant="outline"
                  className={
                    card.trendValue >= 0
                      ? "text-green-700 border-green-300 bg-green-50"
                      : "text-red-700 border-red-300 bg-red-50"
                  }
                >
                  <card.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {card.trend}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <CardTitle className="font-semibold text-emerald-800 text-3xl sm:text-4xl">
                {card.value}
              </CardTitle>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
