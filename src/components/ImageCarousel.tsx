import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Wrench } from "lucide-react";
import vwLogo from "@/assets/carousel/vw-logo.jpeg";
import toyotaEmblem from "@/assets/carousel/toyota-emblem.jpeg";
import fordEmblem from "@/assets/carousel/ford-emblem.jpeg";
import mitsubishiLogo from "@/assets/carousel/mitsubishi-logo.jpeg";
import fordLogo from "@/assets/carousel/ford-logo.jpeg";
import fiatLogo from "@/assets/carousel/fiat-logo.jpeg";
import mercedesLogo from "@/assets/carousel/mercedes-logo.jpeg";
import toyotaLogo from "@/assets/carousel/toyota-logo.jpeg";
import vwWater1 from "@/assets/carousel/vw-water-1.jpeg";
import vwRain from "@/assets/carousel/vw-rain.jpeg";
import toyotaRain from "@/assets/carousel/toyota-rain.jpeg";
import fordRain from "@/assets/carousel/ford-rain.jpeg";
import bmwLogo from "@/assets/carousel/bmw-logo.jpeg";
import hyundaiLogo from "@/assets/carousel/hyundai-logo.jpeg";
import jeepLogo from "@/assets/carousel/jeep-logo.jpeg";
import vwWater2 from "@/assets/carousel/vw-water-2.jpeg";
import volvoLogo from "@/assets/carousel/volvo-logo.jpeg";
import fordBlue from "@/assets/carousel/ford-blue.jpeg";
import pontiacLogo from "@/assets/carousel/pontiac-logo.jpeg";
import audiLogo from "@/assets/carousel/audi-logo.jpeg";
import teslaLogo from "@/assets/carousel/tesla-logo.jpeg";
import nissanNewLogo from "@/assets/carousel/nissan-new-logo.jpeg";
import porscheLogo from "@/assets/carousel/porsche-logo.jpeg";
import bmwNewLogo from "@/assets/carousel/bmw-new-logo.jpeg";
import koenigseggLogo from "@/assets/carousel/koenigsegg-logo.jpeg";

const carouselImages = [
  { src: vwLogo, alt: "Volkswagen", contain: false },
  { src: toyotaEmblem, alt: "Toyota", contain: false },
  { src: fordEmblem, alt: "Ford", contain: false },
  { src: mitsubishiLogo, alt: "Mitsubishi", contain: false },
  { src: fordLogo, alt: "Ford", contain: false },
  { src: fiatLogo, alt: "Fiat", contain: false },
  { src: mercedesLogo, alt: "Mercedes", contain: false },
  { src: toyotaLogo, alt: "Toyota", contain: false },
  { src: vwWater1, alt: "Volkswagen", contain: false },
  { src: vwRain, alt: "Volkswagen", contain: false },
  { src: toyotaRain, alt: "Toyota", contain: false },
  { src: fordRain, alt: "Ford", contain: false },
  { src: bmwLogo, alt: "BMW", contain: false },
  { src: hyundaiLogo, alt: "Hyundai", contain: false },
  { src: jeepLogo, alt: "Jeep", contain: false },
  { src: vwWater2, alt: "Volkswagen", contain: false },
  { src: volvoLogo, alt: "Volvo", contain: false },
  { src: fordBlue, alt: "Ford", contain: false },
  { src: pontiacLogo, alt: "Pontiac", contain: true },
  { src: audiLogo, alt: "Audi", contain: true },
  { src: teslaLogo, alt: "Tesla", contain: false },
  { src: nissanNewLogo, alt: "Nissan", contain: true },
  { src: porscheLogo, alt: "Porsche", contain: true },
  { src: bmwNewLogo, alt: "BMW", contain: true },
  { src: koenigseggLogo, alt: "Koenigsegg", contain: false },
];

const ImageCarousel = ({ className }: { className?: string }) => {
  return (
    <section className={`py-10 md:py-14 bg-white ${className || ''}`}>
      <div className="px-4 mb-6 animate-fade-in-up">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Wrench className="w-5 h-5 text-primary" />
          <h2 className="text-lg md:text-2xl font-bold text-center text-foreground">
            Trabalhamos com as Principais Marcas
          </h2>
        </div>
      </div>
      
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className={`relative w-full h-[300px] md:h-[450px] overflow-hidden ${image.contain ? 'bg-black flex items-center justify-center' : ''}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={image.contain ? "max-w-full max-h-full object-contain" : "w-full h-full object-cover"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8" />
          <CarouselNext className="right-4 md:right-8" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
