import {
  CircleDollarSign,
  Users,
  Phone,
  Megaphone,
  Package,
  TrendingUp,
  Clock,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Clock,
      Bgicon: CircleDollarSign,
      title: "Program Loyalty Points",
    },
    {
      icon: Clock,
      Bgicon: Users,
      title: "Membangun Kemitraan",
    },
    {
      icon: Clock,
      Bgicon: Phone,
      title: "Menyediakan Layanan Konsultasi",
    },
    {
      icon: Clock,
      Bgicon: Megaphone,
      title: "Menyediakan Layanan Pengaduan",
    },
    {
      icon: Clock,
      Bgicon: Package,
      title: "Pengiriman Cepat dan Aman",
    },
    {
      icon: Clock,
      Bgicon: TrendingUp,
      title: "Pengembangan Produk Berkelanjutan",
    },
  ];

  return (
    <section className="relative bg-emerald-800 min-h-screen py-12 md:py-0 px-6 overflow-hidden">
      <div className="container min-h-screen mx-auto flex flex-col justify-center py-8 md:py-0">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kebutuhan <span className="text-white">Anda</span>{" "}
            <span className="text-lime-300">Prioritas</span>{" "}
            <span className="text-white">Kami</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Bersama, kita wujudkan dampak positif bagi bumi dan masyarakat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const BackgroundIcon = service.Bgicon;
            return (
              <div
                key={index}
                className="group relative bg-lime-50 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden min-h-56"
              >
                {/* Background Icon - Watermark Style */}
                <div className="absolute right-6 bottom-6 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300">
                  <BackgroundIcon
                    className="w-28 h-28 text-emerald-700"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-300 rounded-full mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon
                      className="w-6 h-6 text-emerald-700"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-emerald-800 leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
