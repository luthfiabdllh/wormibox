import { Info, Globe, DollarSign, Leaf } from "lucide-react";
import ProductImageMask from "@/components/ui/product-image-mask";

export default function AboutSection() {
  const features = [
    {
      icon: Info,
      title: "Efisiensi lebih tinggi",
      description: "dibanding metode konvensional.",
    },
    {
      icon: Globe,
      title: "Solusi ramah lingkungan",
      description: "untuk menekan gas rumah kaca.",
    },
    {
      icon: DollarSign,
      title: "Mengubah sampah organik",
      description: "menjadi material bernilai guna.",
    },
    {
      icon: Leaf,
      title: "Menyediakan lingkungan",
      description: "yang ideal bagi cacing.",
    },
  ];

  return (
    <section className="bg-emerald-800 relative overflow-hidden">
      <div className="container min-h-screen mx-auto flex flex-col justify-center py-24 px-4 md:px-6 lg:px-8">
        <div className="relative w-full">
          {/* Image Mask - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block">
            <ProductImageMask src="/images/about.jpg" />
          </div>

          {/* Mobile Layout - Stack vertically */}
          <div className="lg:hidden space-y-8">
            {/* Header for mobile */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Pengelolaan
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">Sampah Organik </span>
                <span className="text-lime-300">Modern</span>
              </h3>
              <p className="text-white/90 text-base sm:text-lg">
                WormiBox Memanfaatkan IoT untuk Optimaikan Budidaya Cacing ANC
              </p>
            </div>

            {/* Features for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-lime-50 hover:bg-lime-100 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime-300 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800 mb-2 text-base sm:text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-emerald-700/80 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop/Tablet Layout - Absolute positioned over image */}
          <div className="hidden lg:block">
            {/* Features Grid */}
            <div className="absolute bottom-2 md:bottom-4 lg:bottom-1 left-0 right-0 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-8 px-4 md:px-0 lg:pr-24 max-w-6xl">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-lime-50 hover:bg-lime-100 rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-lime-300 rounded-full flex items-center justify-center mb-3 md:mb-3.5 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-emerald-700"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800 mb-1.5 md:mb-2 text-sm md:text-base lg:text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-emerald-700/80 text-xs md:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Header */}
            <div className="absolute top-0 left-0 p-8 md:p-12 lg:p-24 max-w-6xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 md:mb-5 lg:mb-6">
                Pengelolaan
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 md:mb-5 lg:mb-6">
                <span className="text-white">Sampah Organik </span>
                <span className="text-lime-300">Modern</span>
              </h3>
              <p className="text-white/90 text-base md:text-lg max-w-2xl">
                WormiBox Memanfaatkan IoT untuk Optimaikan Budidaya Cacing ANC
              </p>
            </div>

            {/* Watermark text */}
            <div className="absolute top-0 right-0 opacity-[0.05] hidden lg:block pr-4">
              <span className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-none select-none">
                About WormiBox
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
