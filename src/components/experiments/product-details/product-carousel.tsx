"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import React from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface ProductCarouselProps {
  images: string[];
  drawer?: boolean;
}

export function ProductCarousel({
  images,
  drawer = false,
}: ProductCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [scrollPrev, setScrollPrev] = React.useState<boolean>(false);
  const [scrollNext, setScrollNext] = React.useState<boolean>(true);

  const goToIndex = (index: number) => {
    if (!api) return;

    setCurrent(index);
    api?.scrollTo(index, true);
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on("select", () => {
      setScrollPrev(api.canScrollPrev());
      setScrollNext(api.canScrollNext());
    });
  }, [api]);

  return (
    <div className="group relative sm:rounded-xl overflow-hidden size-full">
      <Carousel
        setApi={setApi}
        className="m-0 size-full"
        opts={{
          align: "center",
          duration: 20,
        }}
      >
        <CarouselContent className="m-0 size-full sm:max-h-[500px]">
          {images.map((item, index) => (
            <CarouselItem
              key={index}
              className="p-0 sm:first:rounded-l-xl sm:last:rounded-r-xl overflow-hidden size-full"
            >
              <Image
                src={item}
                alt="phone screen"
                width={300}
                height={500}
                className="size-full object-center object-cover"
                priority={index === 0 ? true : false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          className={cn(
            "invisible group-hover:visible ml-14 rounded-full size-8 bg-foreground text-background z-50",
            scrollPrev ? "" : "hidden"
          )}
        />
        <CarouselNext
          variant="ghost"
          className={cn(
            "invisible group-hover:visible mr-14 rounded-full size-8 bg-foreground text-background z-50",
            scrollNext ? "" : "hidden"
          )}
        />
      </Carousel>

      <div
        className={cn(
          "absolute z-40 left-1/2 transform -translate-x-1/2",
          drawer ? "bottom-7" : "bottom-3"
        )}
      >
        <div className="flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className="relative size-1.5 overflow-hidden rounded-full"
            >
              <div className="w-full h-full bg-muted/30 absolute"></div>
              <div
                className={cn(
                  "h-full bg-background relative w-0 z-10",
                  current === index + 1 ? "w-full" : ""
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
