import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  date: string;
  value: number;
}

interface ChartSectionProps {
  title: string;
  data: ChartData[];
  color: string;
  minDomain: number;
  maxDomain: number;
}

export default function ChartSection({
  title,
  data,
  color,
  minDomain,
  maxDomain,
}: ChartSectionProps) {
  return (
    <div className="pt-4">
      <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full`}
          style={{ backgroundColor: color }}
        />
        {title}
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#6b7280" />
          <YAxis
            domain={[minDomain, maxDomain]}
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={3}
            dot={{ fill: color, r: 4 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
