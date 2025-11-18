import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Placeholder untuk sections lainnya */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Selamat Datang di {process.env.NEXT_PUBLIC_APP_NAME || "Wormibox"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Website company profile Anda sedang dalam pengembangan. Hero
              section sudah berhasil dibuat dengan shadcn/ui dan Framer Motion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
