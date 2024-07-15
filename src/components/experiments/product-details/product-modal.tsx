"use client";

import { useRouter } from "next/navigation";
import { Drawer } from "vaul";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data";
import ProductDisplay from "./product-display";

interface ProductModalProps {
  product: (typeof products)[0];
}

export function ProductModal({ product }: ProductModalProps) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={true}>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" />
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              "fixed inset-x-0 bottom-0 z-50 mt-24 overflow-hidden rounded-t-[10px] border bg-background"
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center bg-inherit">
              <div className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
            </div>
            details
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn("overflow-hidden p-3 max-w-2xl md:rounded-xl md:border")}
      >
        <ProductDisplay product={product} />
      </DialogContent>
    </Dialog>
  );
}
