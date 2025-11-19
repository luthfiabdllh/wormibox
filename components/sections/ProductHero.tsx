"use client";

import {
  Thermometer,
  Bed,
  BookOpen,
  Box,
  Shovel,
  Worm,
  Redo,
} from "lucide-react";
import BlobMask from "../ui/hero-image";
import ArrowButton from "../ui/arrow-button";

export default function ProductHero() {
  const features = [
    {
      icon: Box,
      title: "Tutup Protect",
      description: "Melindungi dari gangguan luar dan menjaga kelembapan.",
    },
    {
      icon: Shovel,
      title: "Alat Panen",
      description: "Sekop mini untuk memanen cacing dengan mudah dan efisien.",
    },
    {
      icon: Worm,
      title: "Cacing ANC",
      description: "Cacing African Night Crawler sebagai media budidaya.",
    },
    {
      icon: Thermometer,
      title: "Sensor Suhu & Kelembapan",
      description: "Memantau kondisi lingkungan dan pertumbuhan cacing.",
    },
    {
      icon: Bed,
      title: "Bedding Cacing",
      description: "Media tempat hidup dan berkembang biak bagi cacing.",
    },
    {
      icon: BookOpen,
      title: "Panduan Penggunaan",
      description: "Berisi langkah-langkah detail cara penggunaan alat.",
    },
  ];

  return (
    <section className="relative bg-emerald-800 min-h-screen py-20">
      {/* Background Watermark */}
      <div className="absolute top-10 right-8 md:right-24 lg:right-52 opacity-[0.05]">
        <div className="text-right">
          <p className="text-[80px] md:text-[100px] text-white leading-none select-none">
            What&apos;s
          </p>
          <p className="text-[80px] md:text-[100px] text-white leading-none select-none">
            inside ?
          </p>
        </div>
      </div>
      <div className="absolute top-60 right-8 md:right-24 opacity-[0.05] text-white">
        <Redo className="size-32 rotate-120" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-lime-300">PAKET PEMULA</span>{" "}
            <span className="text-white">WormiBox</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk memulai vermicomposting
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 items-center">
          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-lime-50 hover:bg-lime-100  p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-bl-4xl rounded-tr-4xl rounded-lg"
                >
                  {/* Icon */}
                  <div className="bg-lime-300 w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      className="w-6 h-6 text-emerald-700"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-emerald-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-emerald-700/80 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Product Image */}
          <div className="w-full flex items-center justify-center">
            <div className="relative h-[50vh] md:h-[70vh]">
              <BlobMask src="/images/product-hero.jpg" />
              <div className="absolute bottom-0 right-4 sm:bottom-2 sm:right-18 lg:bottom-3 lg:right-16">
                <ArrowButton title="Dapatkan Wormibox" href="#about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
