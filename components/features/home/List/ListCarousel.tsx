
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

type CarouselWithPaginationProps = {
  games: Game[];
};

export const ListCarousel = async({ games }: CarouselWithPaginationProps) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6 p-1">
          {games.map((g: Game) => (
            <CarouselItem
              key={g.id}
              className="pl-6 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="rounded-lg h-[150px] md:h-[200px] overflow-hidden relative">
                      <Image
                        className="h-full w-full object-cover rounded-lg"
                        alt={g.name}
                        src={g.image}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, (max-width: 1536px) 16.66vw, 14.28vw"
                        priority
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{g.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background/90 transition-colors hidden md:flex" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background/90 transition-colors hidden md:flex" />
      </Carousel>
    </>
  );
};
