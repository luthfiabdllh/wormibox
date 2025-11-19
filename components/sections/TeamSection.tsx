"use client";

import Image from "next/image";
import { InstagramIcon, LinkedinIcon, User } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Azkal Anas Ilmawan",
      role: "",
      image: "/images/team/azkal.jpg",
    },
    {
      id: 2,
      name: "Azkal Anas Ilmawan",
      role: "",
      image: "/images/team/bale.jpg",
    },
    {
      id: 3,
      name: "Maureen Arsa Sanda Cantika",
      role: "",
      image: "/images/team/moren.jpg",
    },
    {
      id: 4,
      name: "Vidhyazputri Belva Aqila",
      role: "",
      image: "/images/team/belva.jpg",
    },
    {
      id: 5,
      name: "Fikriansyah Ridwan Pratama",
      role: "",
      image: "/images/team/fikri.jpg",
    },
  ];

  return (
    <section className="bg-lime-50 relative overflow-hidden">
      <div className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Background Text - Hidden on mobile */}
        <div className="hidden md:block absolute top-8 left-8 lg:left-16 xl:left-24">
          <span className="text-[80px] lg:text-[100px] xl:text-[140px] text-emerald-700/5 leading-none select-none">
            Meet
          </span>
        </div>

        <div className="hidden md:block absolute top-48 lg:top-64 xl:top-72 right-8 lg:right-16 xl:right-24">
          <div className="text-right">
            <span className="text-[60px] lg:text-[80px] xl:text-[120px] text-emerald-700/5 leading-none select-none">
              Our Team
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-28 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-emerald-800 mb-4 sm:mb-5 md:mb-6">
              KAMI{" "}
              <span className="inline-block font-semibold bg-emerald-800 text-lime-50 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 shadow-[3px_3px_0_0_rgba(6,95,70,0.20)] sm:shadow-[4px_4px_0_0_rgba(6,95,70,0.20)]">
                TIM WormiBox!
              </span>
            </h2>
            <p className="text-emerald-700/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
              Di sinilah semangat, ide, dan kepedulian berpadu buat wujudkan
              solusi berkelanjutan yang keren.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 justify-items-center">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="group relative w-full max-w-[280px] sm:max-w-xs md:max-w-60 lg:max-w-[220px] xl:max-w-[250px] h-[420px] sm:h-[450px] md:h-[480px] lg:h-[500px] xl:h-[520px] rounded-3xl sm:rounded-4xl overflow-hidden bg-linear-to-b from-gray-800 to-black shadow-lg sm:shadow-xl md:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Member Info */}
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-white/30 backdrop-blur-sm p-1.5 sm:p-2 flex items-center space-x-2 w-full">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                        <User
                          className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-emerald-700"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-xs sm:text-sm md:text-base leading-tight mb-0.5 sm:mb-1 line-clamp-2">
                          {member.name}
                        </h3>
                        {member.role && (
                          <p className="text-xs sm:text-sm text-white/80 line-clamp-1">
                            {member.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Social Links - Show on hover for desktop, always visible on mobile */}
                  <div className="overflow-hidden max-h-20 md:max-h-0 md:group-hover:max-h-20 transition-all duration-500 ease-in-out">
                    <div className="flex items-center gap-2 mt-2">
                      <Button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/30 hover:bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 ease-in-out p-0">
                        <LinkedinIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                      </Button>
                      <Button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/30 hover:bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 ease-in-out p-0">
                        <InstagramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
