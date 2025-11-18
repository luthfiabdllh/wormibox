import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ibu Suprihatin",
      role: "Ibu Rumah Tangga",
      image: "/images/testimonial-1.jpg",
      quote:
        "Sejak menggunakan WormiBox, saya lebih mudah mengelola sampah organik di rumah, limbah dapur kini bisa diurai cepat tanpa bau, dan hasilnya jadi pupuk alami untuk tanaman. Alatnya praktis, otomatis, dan sangat membantu saya menerapkan gaya hidup zero waste.",
    },
    {
      name: "NVK Cacing",
      role: "",
      image: "/images/testimonial-2.jpg",
      quote:
        "Ternyata WormiBox bisa mempercepat pertumbuhan dan perkembangan cacing. Potensial banget untuk digunakan di peternakan cacing modern.",
    },
    {
      name: "Eva Reza",
      role: "Ketua Komunitas Anak Pangan Indonesia",
      image: "/images/testimonial-3.jpg",
      quote:
        "Sebagai komunitas yang peduli pada isu lingkungan, kami melihat WormiBox sebagai inovasi nyata dan bermanfaat. Alat ini membantu kami mengelola praktik budidaya cacing yang ramah dan berkelanjutan.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F3F8E5] relative overflow-hidden min-h-screen">
      <h2 className="absolute left-8 top-8 text-[6rem] font-light text-emerald-900/10 tracking-wide select-none">
        What
      </h2>
      <h2 className="absolute right-8 top-32 text-[6rem] font-light text-emerald-900/10 tracking-wide select-none">
        They Said
      </h2>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl text-emerald-800 mb-2">APA</h2>
          <div className="inline-block bg-lime-300 px-8 py-4 shadow-[4px_4px_0_0_rgba(6,95,70,0.20)]">
            <h3 className="text-3xl lg:text-4xl font-bold text-emerald-800">
              KATA MEREKA
            </h3>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Top image */}
                <div className="relative h-160 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70"></div>

                  {/* Badge and Quote */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/30 backdrop-blur w-fit px-4 py-2 rounded-full flex items-center shadow-md">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                        <User className="w-4 h-4 text-emerald-800" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-tight">
                          {t.name}
                        </p>
                        {t.role && (
                          <p className="text-xs text-white leading-tight">
                            {t.role}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm leading-tight text-white my-4">
                      “{t.quote}”
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
