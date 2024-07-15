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
}

export function ProductCarousel({ images }: ProductCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [scrollPrev, setScrollPrev] = React.useState<boolean>(false);
  const [scrollNext, setScrollNext] = React.useState<boolean>(true);

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
    <div className="group relative rounded-xl overflow-hidden w-full">
      <Carousel
        setApi={setApi}
        className="m-0"
        opts={{
          align: "center",
          duration: 20,
        }}
      >
        <CarouselContent className="m-0">
          {images.map((item, index) => (
            <CarouselItem key={index} className="p-0 first">
              <Image
                src={item}
                alt="phone screen"
                width={300}
                height={800}
                className="size-full object-center object-cover "
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

      <div className="absolute z-40 bottom-3 left-1/2 transform -translate-x-1/2 invisible group-hover:visible">
        <div className="flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
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
