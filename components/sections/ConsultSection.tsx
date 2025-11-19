import ArrowButton from "../ui/arrow-button";

export default function ConsultSection() {
  return (
    <section className="relative bg-lime-50 min-h-screen py-32 px-6 overflow-hidden">
      {/* Background Text - Consult */}
      <div className="absolute top-12 left-8 md:left-16 lg:left-24">
        <span className="text-[120px] md:text-[160px] lg:text-[200px] text-emerald-700/5 leading-none select-none">
          Consult
        </span>
      </div>

      {/* Background Text - With Us */}
      <div className="absolute bottom-12 right-8 md:right-16 lg:right-24">
        <span className="text-[100px] md:text-[140px] lg:text-[180px] text-emerald-700/5 leading-none select-none">
          With Us
        </span>
      </div>

      {/* Content */}
    <div className="z-10 container mx-auto max-w-4xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-emerald-800 mb-6">
        <span className="font-semibold">Konsultasi</span>{" "}
        <span>Sekarang</span>
      </h2>

      <p className="text-lg md:text-xl text-emerald-700/80 mb-10 max-w-2xl mx-auto leading-relaxed">
        Hubungi tim kami untuk konsultasi gratis dan dapatkan solusi terbaik
        untuk kebutuhan Anda
      </p>

      {/* CTA Button */}
      <ArrowButton
        title="Konsultasi Sekarang"
        href="/contact"
        target="_self"
        variant="emerald"
      />
    </div>
    </section>
  );
}
