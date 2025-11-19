interface GaugeDisplayProps {
  value: number;
  maxValue: number;
  label: string;
  status: string;
  statusColor: string;
  gaugeColor: string;
}

export default function GaugeDisplay({
  value,
  maxValue,
  label,
  status,
  statusColor,
  gaugeColor,
}: GaugeDisplayProps) {
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
            stroke={gaugeColor}
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${(value / maxValue) * 251.2} 251.2`}
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
