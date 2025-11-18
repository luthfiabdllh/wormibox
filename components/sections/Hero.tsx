import BlobMask from "../ui/hero-image";
import { Separator } from "../ui/separator";
import ArrowButton from "../ui/arrow-button";

const Hero = () => {
  return (
    <section className="bg-emerald-800 relative overflow-hidden">
      <div className="container min-h-screen mx-auto lg:mt-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 min-h-[80vh] py-12 lg:py-0">
          <div className="flex flex-col items-center p-6 sm:p-8 md:p-12 lg:p-16 text-center lg:items-start lg:text-left">
            <h1 className="mt-6 text-pretty text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <p className=" text-lime-50">Inovasi Cerdas,</p>
              <p className=" text-lime-200">Bumi Puas,</p>
              <p className=" text-lime-400">Sampah Tuntas!</p>
            </h1>
            <Separator className="my-6 w-1/4 h-1 rounded-full" />
            <p className="text-muted-foreground mb-8 max-w-xl text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed">
              Wujudkan pengelolaan sampah organik terbaik menjadi sumber daya
              bernilai melalui budidaya cacing tanah ANC dan teknologi IoT,
              untuk proses lebih efisien dan ramah lingkungan.
            </p>
            <ArrowButton title="Pesan Wormibox" href="#about" />
          </div>
          <div className="relative w-full h-[50vh] lg:h-[70vh] flex items-center justify-center">
            <BlobMask src="/images/hero.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
