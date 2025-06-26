import React from "react";
import {
  BetsoftSvg,
  BgamingSvg,
  QSvg,
  KaGamingSvg,
  FourSpinSvg,
  EndorphinaSvg,
  PragmaticSvg,
  NetentSvg,
} from "@/public/icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const svgImages = [
  BetsoftSvg,
  BgamingSvg,
  QSvg,
  KaGamingSvg,
  FourSpinSvg,
  EndorphinaSvg,
  PragmaticSvg,
  NetentSvg,
];

const ProvidersSection = () => {
  return (
    <section className="space-y-2">
      <h2 className="my-4 text-lg font-semibold capitalize">Providers</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="relative w-fit justify-self-end flex mb-10 mr-12">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <CarouselContent className="-ml-4">
          {svgImages.map((SvgComponent, i) => (
            <CarouselItem
              key={i}
              className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <div className="rounded-lg bg-dark-blue flex items-center justify-center p-2 h-[60px]">
                <SvgComponent className="max-h-full max-w-full w-full h-auto" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProvidersSection;
