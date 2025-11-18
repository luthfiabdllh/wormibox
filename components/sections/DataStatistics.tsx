import { Trash2, Home, Infinity, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DataStatistics() {
  const statistics = [
    {
      icon: Trash2,
      value: "33.9",
      unit: "juta ton",
      label: "Timbunan Sampah Nasional",
      bgColor: "bg-lime-300",
    },
    {
      icon: Home,
      value: "51.87",
      unit: "%",
      label: "Sampah Organik Rumah Tangga",
      bgColor: "bg-lime-300",
    },
    {
      icon: Infinity,
      value: "Ke-12",
      unit: "",
      label: "Point SDGs",
      bgColor: "bg-lime-300",
    },
    {
      icon: Eye,
      value: "Ke-13",
      unit: "",
      label: "Point SDGs",
      bgColor: "bg-lime-300",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FCEB] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="absolute left-8 top-14 text-[8rem] font-light text-emerald-900/10 tracking-wide select-none">
          Insight
        </h2>

        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl lg:text-5xl mb-3">
            <span className="text-emerald-800">DATA DAN </span>
            <span className="text-lime-400">STATISTIK</span>
          </h2>
          <p className="text-lg lg:text-xl text-emerald-700">
            Data terkini yang mendorong kami untuk terus berinovasi
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {statistics.map((stat, index) => {
            const roundedClass =
              index % 2 === 0
                ? "rounded-bl-4xl rounded-tr-4xl" 
                : "rounded-tl-4xl rounded-br-4xl"; 

            return (
              <Card
                key={index}
                className={`${stat.bgColor} border-0 shadow-md ${roundedClass}`}
              >
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <stat.icon className="h-7 w-7 text-emerald-800" />
                  </div>

                  <h3 className="text-4xl font-bold text-emerald-900">
                    {stat.value}
                    {stat.unit && (
                      <span className="text-2xl font-semibold ml-1">
                        {stat.unit}
                      </span>
                    )}
                  </h3>

                  <p className="text-emerald-800 text-lg leading-tight">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Decorative magnifier (kanan) */}
        <div className="absolute right-10 top-10 opacity-10 select-none hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="#6EC28A"
              strokeWidth="10"
              fill="none"
            />
            <line
              x1="140"
              y1="140"
              x2="190"
              y2="190"
              stroke="#6EC28A"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
