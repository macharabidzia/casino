"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Carousel1 from "@/public/images/carousel-1.png";
import Carousel2 from "@/public/images/carousel-2.png";
import Image from "next/image";
import Carousel3 from "@/public/images/carousel-2.png";
const images = [
  {
    image: Carousel1,
  },
  { image: Carousel2 },
  { image: Carousel3 },
  { image: Carousel1 },
  { image: Carousel2 },
  { image: Carousel3 },
  { image: Carousel2 },
  { image: Carousel3 },
  { image: Carousel2 },
  { image: Carousel3 },
  { image: Carousel2 },
  { image: Carousel3 },
];

export const Heading = () => {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    const onReInit = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);
    api.on("reInit", onReInit);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onReInit);
    };
  }, [api]);

  return (
    <Carousel
      opts={{
        slidesToScroll: 2,
      }}
      setApi={setApi}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {images.map((imgData, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2">
            <div>
              <Image
                src={imgData.image}
                alt={`Carousel Image ${index + 1}`}
                width={595}
                height={300}
                className="w-full h-full rounded-md object-cover"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative flex justify-center items-center mt-4 space-x-2">
        {api && (
          <div className="flex space-x-2">
            {api.scrollSnapList().map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => api.scrollTo(index)}
                className={`
                  h-2 w-4 rounded-full transition-colors duration-200
                  ${
                    index + 1 === current
                      ? "bg-light-blue"
                      : "bg-transparent border-light-blue border"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Carousel>
  );
};
