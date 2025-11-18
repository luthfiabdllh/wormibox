import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const sections = [
    {
      title: "Tautan Cepat",
      links: [
        { name: "Mengapa WormiBox?", href: "#why-wormibox" },
        { name: "Tentang WormiBox", href: "#about" },
        { name: "Solusi Kami", href: "#solutions" },
        { name: "Layanan & Dukungan", href: "#support" },
        { name: "Hubungi Tim", href: "#contact" },
      ],
    },
    {
      title: "Jam Operasional",
      content: (
        <div className="space-y-4 text-sm text-white/90">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 mt-0.5 shrink-0 text-lime-300" />
            <div>
              <p className="font-semibold">Senin - Jumat</p>
              <p>Pukul 08.00 - 21.00 WIB</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 mt-0.5 shrink-0 text-lime-300" />
            <div>
              <p className="font-semibold">Sabtu & Minggu</p>
              <p>Pukul 07.00 - 19.00 WIB</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Info Kontak",
      content: (
        <div className="space-y-4 text-sm text-white/90">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-lime-300" />
            <p>Kec Depok, Kab Sleman, DIY</p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-0.5 shrink-0 text-lime-300" />
            <Link
              href="mailto:wormibox@gmail.com"
              className="hover:text-white transition-colors"
            >
              wormibox@gmail.com
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="w-4 h-4" />,
      href: "#",
      label: "Instagram",
    },
    { icon: <FaFacebook className="w-4 h-4" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="w-4 h-4" />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
    { icon: <FaYoutube className="w-4 h-4" />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-emerald-700 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Image
                width={36}
                height={36}
                src="/icon.svg"
                className="max-h-8"
                alt="wormibox logo"
              />
              <h2 className="text-xl ">WormiBox</h2>
            </Link>
            <p className="text-sm text-white max-w-80 leading-relaxed">
              Solusi modern pengelolaan sampah organik dengan teknologi IoT
              untuk masa depan berkelanjutan.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-2xl border-white/30 backdrop-blur-md border flex items-center justify-center hover:bg-white/20 bg-white/10 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="text-lg font-bold mb-6 text-lime-300">
                {section.title}
              </h3>
              {section.links ? (
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/90 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                section.content
              )}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-white/80">
            © 2025 WormiBox. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
