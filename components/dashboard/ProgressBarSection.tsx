import { Progress } from "@/components/ui/progress";

interface ProgressBarSectionProps {
  label: string;
  currentValue: number;
  minValue: number;
  maxValue: number;
  unit: string;
  percentage: number;
  color: string;
  progressBarClass?: string;
}

export default function ProgressBarSection({
  label,
  currentValue,
  minValue,
  maxValue,
  unit,
  percentage,
  color,
  progressBarClass = "",
}: ProgressBarSectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs sm:text-sm text-gray-600">
        <span>{label}</span>
        <span className="font-semibold">
          {currentValue}
          {unit}
        </span>
      </div>
      <div className="relative">
        <Progress
          value={percentage}
          className={`h-3 sm:h-4 bg-gray-200 ${progressBarClass}`}
        />
        {/* Markers */}
        <div className="absolute inset-0 flex justify-between items-center px-1">
          <div className="w-0.5 h-full bg-gray-400" />
          <div className="w-0.5 h-full bg-gray-400" />
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span className="text-left">
          Min Optimal
          <br />
          <span className="font-semibold text-gray-700">
            {minValue}
            {unit}
          </span>
        </span>
        <span className="text-center">
          Current
          <br />
          <span className={`font-semibold ${color}`}>
            {currentValue}
            {unit}
          </span>
        </span>
        <span className="text-right">
          Max Optimal
          <br />
          <span className="font-semibold text-gray-700">
            {maxValue}
            {unit}
          </span>
        </span>
      </div>
    </div>
  );
}
