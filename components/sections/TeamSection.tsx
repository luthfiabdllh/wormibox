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
      <div className="container min-h-screen mx-auto flex flex-col justify-center">
        <div className="absolute top-8 left-8 md:left-16 lg:left-24">
          <span className="text-[100px] md:text-[140px] text-emerald-700/5 leading-none select-none">
            Meet
          </span>
        </div>

        <div className="absolute top-72 right-8 md:right-16 lg:right-24">
          <div className="text-right">
            <span className="text-[80px] md:text-[120px] text-emerald-700/5 leading-none select-none">
              Our Team
            </span>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-emerald-800 mb-4">
              KAMI{" "}
              <span className="inline-block font-semibold bg-emerald-800 text-lime-50 px-8 py-4 shadow-[4px_4px_0_0_rgba(6,95,70,0.20)]">
                TIM WormiBox!
              </span>
            </h2>
            <p className="text-emerald-700/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Di sinilah semangat, ide, dan kepedulian berpadu buat wujudkan
              solusi berkelanjutan yang keren.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 justify-items-center">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="group relative w-64 h-108 rounded-4xl overflow-hidden bg-linear-to-b from-gray-800 to-black shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-2 left-0 right-0 mx-2 text-white">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-white/30 backdrop-blur-xs p-2 flex items-center space-x-2 w-full">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                        <User
                          className="w-5 h-5 text-emerald-700"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold leading-tight mb-1">
                          {member.name}
                        </h3>
                        {member.role && (
                          <p className="text-sm text-white/80">{member.role}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out">
                    <div className="flex items-center gap-2 mt-2">
                      <Button className="w-10 h-10 bg-white/30 hover:bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                        <LinkedinIcon
                          className="w-5 h-5 text-white"
                        />
                      </Button>
                      <Button className="w-10 h-10 bg-white/30 hover:bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                        <InstagramIcon
                          className="w-5 h-5 text-white"
                        />
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
