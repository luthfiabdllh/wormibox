"use client";

import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-emerald-100 rounded-3xl flex items-center justify-center">
      <p className="text-emerald-700">Loading map...</p>
    </div>
  ),
});

export default function ContactSection() {
  const contactItems = [
    {
      icon: MessageCircle,
      label: "Whatsapp",
      value: "088888888888",
      href: "https://wa.me/6288888888888",
      bgColor: "bg-lime-300",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "088888888888",
      href: "tel:+6288888888888",
      bgColor: "bg-lime-300",
    },
    {
      icon: Mail,
      label: "Email",
      value: "wormibox@gmail.com",
      href: "mailto:wormibox@gmail.com",
      bgColor: "bg-lime-300",
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Kec Depok, Kab Sleman, DIY",
      href: "https://maps.google.com/?q=Kec+Depok+Sleman+DIY",
      bgColor: "bg-lime-300",
    },
  ];

  return (
    <section className="relative bg-emerald-800 min-h-screen py-12 md:py-0 px-6 overflow-hidden">
      <div className="container min-h-screen mx-auto flex flex-col justify-center py-8 md:py-0">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Hubungi Kami</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk memulai vermicomposting
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-start">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-lime-50 hover:bg-lime-100  p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-bl-4xl rounded-tr-4xl rounded-lg"
                >
                  {/* Icon */}
                  <div
                    className={`${item.bgColor} p-3 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className="w-5 h-5 text-emerald-700"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-emerald-800 mb-1">
                      {item.label}
                    </p>
                    <p className="text-emerald-800 truncate">{item.value}</p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="shrink-0">
                    <ArrowUpRight className="w-6 h-6 text-emerald-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Map */}
          <div className="h-[500px] lg:h-full min-h-[700px] rounded-bl-4xl rounded-tr-4xl rounded-lg overflow-hidden shadow-2xl">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
