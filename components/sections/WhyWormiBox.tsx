import { CheckCircle, TrendingUp, Target } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import ArrowButton from "../ui/arrow-button";

export default function WhyWormiBox() {
  return (
    <section className="min-h-screen bg-lime-300 py-16 lg:py-24" id="why-wormibox">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl text-emerald-800 mb-2">
            MENGAPA
          </h2>
          <div className="inline-block bg-white px-8 py-4 shadow-[4px_4px_0_0_rgba(6,95,70,0.20)]">
            <h3 className="text-3xl lg:text-4xl font-bold text-emerald-800">
              WormiBox?
            </h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mx-auto">
          {/* Left Column - African Night Crawler Image */}
          <div className="flex-1">
            <Card className="relative border-0 shadow-xl rounded-4xl overflow-hidden h-96 lg:h-full">
              <Image
                src="/images/anc-worm.jpg"
                alt="African Night Crawler"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70"></div>

              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-full bg-white/30 backdrop-blur-xs p-2 mb-4 w-fit flex items-center space-x-2">
                  <div className="size-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <span className="font-semibold text-white">
                    African Night Crawler
                  </span>
                </div>
                <p className="max-w-lg text-white">
                  Mengubah sampah organik menjadi pupuk berkualitas tinggi
                  dengan cacing ANC
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Problem & Solution Cards */}
          <div className="flex-1 flex flex-col space-y-6 py-8">
            {/* Masalah Card */}
            <div className="bg-lime-50 p-6 rounded-bl-4xl rounded-tr-4xl flex gap-6 items-start">
              <div className="relative p-4 bg-lime-300 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="h-6 w-6 text-emerald-800" />
                <div className="absolute bottom-0 right-0 size-4 bg-emerald-800 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <h6 className="text-2xl font-semibold text-emerald-800">
                  Masalah
                </h6>
                <p className="text-lg leading-tight text-emerald-700">
                  Indonesia menghadapi tantangan besar dalam pengelolaan sampah
                  organik. Teknologi konvensional kurang efisien, sampah
                  berakhir di TPA dan menghasilkan gas metana berbahaya.
                </p>
              </div>
            </div>
            {/* Solusi Card */}
            <div className="bg-lime-50 p-6 rounded-tl-4xl rounded-br-4xl flex gap-6 items-start">
              <div className="relative p-4 bg-emerald-800 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="h-6 w-6 text-lime-300" />
                <div className="absolute bottom-0 right-0 size-4 bg-lime-300 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <h6 className="text-2xl font-semibold text-emerald-800">
                  Solusi
                </h6>
                <p className="text-lg leading-tight text-emerald-700">
                  WormiBox menggunakan vermicomposting dengan cacing ANC
                  dilengkapi IoT untuk monitoring real-time. Mengubah sampah
                  organik jadi pupuk berkualitas secara efisien dan ramah
                  lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Target SDGs Section */}
        <div className="mt-16">
          <Card className="relative bg-emerald-800 border-0 shadow-2xl overflow-hidden rounded-4xl">
            <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-6 md:pr-10 opacity-10 pointer-events-none">
              <p className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] text-white">
                SDG
              </p>
            </div>

            <CardContent className="relative p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                {/* LEFT SECTION */}
                <div className="flex flex-col gap-6 flex-1">
                  {/* TITLE + BUTTON (RESPONSIVE) */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-lime-300 rounded-full flex items-center justify-center">
                        <Target className="h-5 w-5 text-emerald-800" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                        Target SDGs
                      </h3>
                    </div>

                    <ArrowButton title="Pelajari Lebih Lanjut" href="https://sdgs.bappenas.go.id/" />
                  </div>

                  {/* SDGs CARDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* SDG 12 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg">
                      <div className="flex items-center gap-4">
                        <Image
                          width={100}
                          height={100}
                          src="/images/sdg12.jpg"
                          alt="SDG 12"
                          className="size-20 rounded-bl-xl rounded-tr-xl object-cover"
                        />
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white">
                            SDGs ke-12
                          </h4>
                          <p className="text-emerald-100 text-sm leading-relaxed">
                            Konsumsi dan produksi yang bertanggung jawab.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* SDG 13 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg">
                      <div className="flex items-center gap-4">
                        <Image
                          width={100}
                          height={100}
                          src="/images/sdg13.jpg"
                          alt="SDG 13"
                          className="size-20 rounded-tl-xl rounded-br-xl object-cover"
                        />
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white">
                            SDGs ke-13
                          </h4>
                          <p className="text-emerald-100 text-sm leading-relaxed">
                            Mengurangi emisi gas rumah kaca.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
