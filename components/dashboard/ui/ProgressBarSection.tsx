interface ProgressBarSectionProps {
  label: string;
  currentValue: number;
  minValue: number;
  maxValue: number;
  unit: string;
  percentage: number;
  color: string;
  progressBarClass?: string;
  optimalMin?: number;
  optimalMax?: number;
}

export default function ProgressBarSection({
  label,
  currentValue,
  minValue,
  maxValue,
  unit,
  percentage,
  color,
  optimalMin,
  optimalMax,
}: ProgressBarSectionProps) {
  // Dynamic color based on percentage: 0% = yellow, 50% = orange, 100% = red
  const getDynamicColor = () => {
    if (percentage <= 50) {
      // Interpolate between yellow (#eab308) and orange (#fb923c)
      const ratio = percentage / 50;
      return interpolateColor("#eab308", "#fb923c", ratio);
    } else {
      // Interpolate between orange (#fb923c) and red (#ef4444)
      const ratio = (percentage - 50) / 50;
      return interpolateColor("#fb923c", "#ef4444", ratio);
    }
  };

  // Helper function to interpolate between two hex colors
  const interpolateColor = (color1: string, color2: string, ratio: number) => {
    const hex = (x: string) => parseInt(x, 16);
    const r1 = hex(color1.substring(1, 3));
    const g1 = hex(color1.substring(3, 5));
    const b1 = hex(color1.substring(5, 7));
    const r2 = hex(color2.substring(1, 3));
    const g2 = hex(color2.substring(3, 5));
    const b2 = hex(color2.substring(5, 7));

    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);

    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const dynamicColor = getDynamicColor();

  // Calculate optimal range markers if provided
  const optimalMinPercent = optimalMin
    ? ((optimalMin - minValue) / (maxValue - minValue)) * 100
    : null;
  const optimalMaxPercent = optimalMax
    ? ((optimalMax - minValue) / (maxValue - minValue)) * 100
    : null;

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
        <div className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 ease-in-out"
            style={{
              width: `${percentage}%`,
              backgroundColor: dynamicColor,
            }}
          />
        </div>
        {/* Optimal range markers */}
        {optimalMinPercent !== null && optimalMaxPercent !== null && (
          <>
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-green-500"
              style={{ left: `${optimalMinPercent}%` }}
            />
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-green-500"
              style={{ left: `${optimalMaxPercent}%` }}
            />
          </>
        )}
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span className="text-left">
          Min
          <br />
          <span className="font-semibold text-gray-700">
            {minValue}
            {unit}
          </span>
        </span>
        {optimalMin !== undefined && optimalMax !== undefined && (
          <span className="text-center">
            Optimal
            <br />
            <span className="font-semibold text-green-700">
              {optimalMin}-{optimalMax}
              {unit}
            </span>
          </span>
        )}
        <span className="text-center">
          Current
          <br />
          <span className={`font-semibold ${color}`}>
            {currentValue}
            {unit}
          </span>
        </span>
        <span className="text-right">
          Max
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
