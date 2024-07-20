"use client";

import React from "react";
import Image from "next/image";
import { ImageData } from "@/types";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProductCarouselProps {
  images: ImageData[];
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
    <div className="group relative size-full overflow-hidden sm:rounded-xl">
      <Carousel
        setApi={setApi}
        className="m-0 size-full"
        opts={{
          align: "center",
          duration: 20,
        }}
      >
        <CarouselContent
          className={cn("m-0 size-full sm:max-h-[500px]", {
            "max-h-[600px]": !drawer,
          })}
        >
          {images.map((item, idx) => (
            <CarouselItem
              key={item.img.src}
              className="size-full overflow-hidden p-0 sm:first:rounded-l-xl sm:last:rounded-r-xl"
            >
              <Image
                {...item.img}
                alt={item.img.src}
                key={item.img.src}
                placeholder="blur"
                blurDataURL={item.base64}
                priority={idx === 0 ? true : false}
                className="size-full object-cover object-center sm:max-h-[500px]"
                sizes="(max-width: 640px) 500px, 350px"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          className={cn(
            "invisible z-50 ml-14 size-8 rounded-full bg-foreground text-background group-hover:visible",
            scrollPrev ? "" : "hidden",
          )}
        />
        <CarouselNext
          variant="ghost"
          className={cn(
            "invisible z-50 mr-14 size-8 rounded-full bg-foreground text-background group-hover:visible",
            scrollNext ? "" : "hidden",
          )}
        />
      </Carousel>

      {/* Dots */}
      <div
        className={cn(
          "absolute left-1/2 z-40 -translate-x-1/2",
          drawer ? "bottom-7" : "bottom-3",
        )}
      >
        <div className="flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              // use <Button></Button> instead div if you want click to go next image
              // aria-label={`carousel-img-${index}`}
              // onClick={() => goToIndex(index)}
              className="relative size-1.5 overflow-hidden rounded-full"
            >
              <div className="absolute size-full bg-muted/30 dark:bg-muted-foreground/80"></div>
              <div
                className={cn(
                  "relative z-10 h-full w-0 bg-background dark:bg-foreground",
                  current === index + 1 ? "w-full" : "",
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
