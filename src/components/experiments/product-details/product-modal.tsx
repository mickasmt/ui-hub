"use client";

import { useRouter } from "next/navigation";
import { Drawer } from "vaul";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { ProductCarousel } from "./product-carousel";
import ProductDisplay, { ProductInfos } from "./product-display";
import { SmoothButtonCart } from "./smooth-button-cart";
interface ProductModalProps {
  product: (typeof products)[0];
}

export function ProductModal({ product }: ProductModalProps) {
  const router = useRouter();
  const { isMobile, height } = useMediaQuery();
  const [snap, setSnap] = useState<number | string | null>(0.3);

  const snapPoints = ["250px", 0.85];
  const lastSnapPoint = snapPoints[snapPoints.length - 1];

  let drawerHeightStart;
  if (height) {
    drawerHeightStart =
      typeof snapPoints[0] === "string"
        ? height - (parseInt(snapPoints[0].replace("px", "")) - 35)
        : 0;
  }

  const handleOpenChange = () => {
    router.back();
  };

  if (isMobile) {
    return (
      <Drawer.Root
        open={true}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
        dismissible={false}
        onClose={handleOpenChange}
      >
        <Drawer.Portal>
          <Drawer.Overlay
            // onClick={() => setSnap(snapPoints[0])}
            className="fixed inset-0 bg-background/30 backdrop-blur-sm"
            style={{
              zIndex: snap === lastSnapPoint ? 45 : 30,
            }}
          />

          {/* Carousel */}
          <div className="fixed inset-0 bg-background z-40 pointer-events-auto">
            <div
              className="relative size-full"
              style={{
                height: drawerHeightStart,
              }}
            >
              <ProductCarousel images={product.images} drawer />
            </div>
          </div>

          {/* Cart button  */}
          <div className="fixed inset-x-0 bottom-0 z-[80] h-16 shrink-0 bg-background border-t  pointer-events-auto">
            <div className="flex items-center h-full max-w-md mx-auto px-4">
              <SmoothButtonCart />
            </div>
          </div>

          {/* Drawer Content */}
          <Drawer.Content
            vaul-drawer-carousel=""
            className="fixed flex flex-col bg-background border border-b-none rounded-t-2xl overflow-hidden bottom-0 inset-x-0 h-full max-h-[97%] mx-[-1px] z-50 outline-none"
          >
            <div className="sticky top-0 flex w-full items-center justify-center bg-background">
              <div className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
            </div>

            <div
              className={cn(
                "relative flex flex-col max-w-md mx-auto w-full px-4 pt-2 pb-52",
                {
                  "overflow-y-auto": snap === lastSnapPoint,
                  "overflow-hidden": snap !== lastSnapPoint,
                }
              )}
            >
              {/* Header Drawer */}
              <div
                className="w-full shrink-0"
                // style={{
                //   height: drawerHeightStart
                //     ? `calc(${snapPoints[0]} - 50px)`
                //     : "auto",
                // }}
              >
                <Drawer.Title className="mt-1 text-2xl truncate font-bold">
                  {product.title}
                </Drawer.Title>
                <p className="mt-2 text-xl text-muted-foreground font-medium">
                  ${product.price}
                </p>
                <div className="mt-3 flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={`star-${index}`}
                      className="text-yellow-400 h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
                  <span className="text-[15px] leading-none text-muted-foreground/80 font-medium ml-2">
                    35 reviews
                  </span>
                </div>
              </div>

              <div className="mt-3 mb-14 w-full text-pretty">
                <Drawer.Description className="mt-6 mb-4 text-[17px] text-muted-foreground font-medium">
                  {product.description}
                </Drawer.Description>

                <ProductInfos />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "overflow-hidden p-3 max-w-2xl md:rounded-2xl md:border gap-0"
        )}
      >
        <DialogHeader className="h-0">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ProductDisplay product={product} />
      </DialogContent>
    </Dialog>
  );
}
