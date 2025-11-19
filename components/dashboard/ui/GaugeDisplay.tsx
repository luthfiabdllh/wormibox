interface GaugeDisplayProps {
  value: number;
  maxValue: number;
  minValue: number;
  label: string;
  status: string;
  statusColor: string;
  gaugeColor: string;
}

export default function GaugeDisplay({
  value,
  maxValue,
  minValue,
  label,
  status,
  statusColor,
}: GaugeDisplayProps) {
  // Calculate the arc length based on the range
  const range = maxValue - minValue;
  const normalizedValue = Math.max(0, Math.min(range, value - minValue));
  const percentage = (normalizedValue / range) * 100;
  const arcLength = (normalizedValue / range) * 251.2;

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

  return (
    <div className="flex flex-col items-center justify-center py-4 sm:py-6">
      <div className="relative w-48 h-28 sm:w-56 sm:h-32 mb-4">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={dynamicColor}
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} 251.2`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <span className="text-3xl sm:text-4xl font-bold text-emerald-800">
            {label}
          </span>
          <span className={`text-xs sm:text-sm font-semibold ${statusColor}`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
