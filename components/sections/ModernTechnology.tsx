import { Recycle, Cpu, Zap, Leaf } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ModernTechnology() {
  const technologies = [
    {
      icon: Recycle,
      title: "Productive Waste Management",
      description:
        "Sampah organik memiliki potensi untuk diubah menjadi sumber daya produktif dengan bantuan budidaya cacing tanah African Night Crawler (ANC).",
    },
    {
      icon: Cpu,
      title: "IoT–Driven Efficiency",
      description:
        "Melalui Internet of Things (IoT), sistem pemantauan dan pengelolaan sampah dapat diotomatisasi dan diakses secara langsung (real-time), yang berkontribusi pada peningkatan kemudahan penggunaan serta pencapaian efisiensi yang optimal.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description:
        "Dengan logika Fuzzy Sugeno, sistem ini mampu mengatur media komposter secara mandiri, mengoptimalkan penggunaan air, dan meningkatkan efisiensi operasional.",
    },
    {
      icon: Leaf,
      title: "Sustainable Impact",
      description:
        "Manajemen sampah organik yang lebih baik membantu menekan emisi gas rumah kaca dan mendukung pencapaian tujuan SDGs.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#064e3b] relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl text-white leading-tight">
            TEKNOLOGI <span className="text-lime-50">MODERN</span> UNTUK{" "}
            <span className="text-lime-400">MASA DEPAN</span> ANDA
          </h2>
          <p className="text-xl text-emerald-100 mt-4">
            Inovasi terkini dalam pengelolaan sampah organik dengan teknologi
            IoT
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Rounded =
              index % 2 === 0
                ? "rounded-tl-4xl rounded-br-4xl"
                : "rounded-tr-4xl rounded-bl-4xl";

            return (
              <Card
                key={index}
                className={`
                  bg-lime-50
                  shadow-xl border-0 
                  overflow-hidden 
                  relative 
                  ${Rounded}
                `}
              >
                {/* Soft radial highlight */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute right-0 top-0 w-36 h-36 bg-lime-300/20 rounded-bl-full"></div>
                </div>

                <CardHeader className="pb-3 relative z-10 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="relative p-4 bg-lime-300 rounded-full flex items-center justify-center shadow-lg">
                      <tech.icon className="h-6 w-6 text-emerald-800" />
                      <div className="absolute bottom-0 right-0 size-4 bg-emerald-800 rounded-full"></div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <CardTitle className="text-xl text-emerald-800 font-semibold leading-tight mb-6">
                    {tech.title}
                  </CardTitle>

                  <CardDescription className="text-emerald-700 text-base leading-tight">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
