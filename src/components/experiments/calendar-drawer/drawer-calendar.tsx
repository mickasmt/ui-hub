"use client";

import { useRef, useState } from "react";
import { Drawer } from "vaul";

import { EVENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { DayViewCalendar, Event } from "./calendar-day-view";
import { Calendar } from "./calendar-ui-custom";

export function DrawerCalendar() {
  const { isMobile, height } = useMediaQuery();

  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [snap, setSnap] = useState<number | string | null>(0.3);
  const contentRef = useRef<HTMLDivElement>(null);

  const snapPoints = ["270px", 0.75];
  const lastSnapPoint = snapPoints[snapPoints.length - 1];

  let drawerHeightStart;
  if (height) {
    drawerHeightStart =
      typeof snapPoints[0] === "string"
        ? height - (parseInt(snapPoints[0].replace("px", "")) - 35)
        : 0;
  }

  const handleSnapChange = (newSnap: any) => {
    if (newSnap !== lastSnapPoint && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    setSnap(newSnap);
  };

  if (isMobile) {
    return (
      <Drawer.Root
        open={open}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={handleSnapChange}
        onClose={() => setOpen(false)}
      >
        <Drawer.Trigger>
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="rounded-xl px-5 font-medium"
          >
            Drawer Calendar
          </Button>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-10 bg-background/30 backdrop-blur-sm" />

          {/* Calendar */}
          <div className="pointer-events-auto fixed inset-0 z-40 bg-background">
            <div
              className="relative flex size-full justify-center"
              style={{
                height: drawerHeightStart,
              }}
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disableNavigation
                showOutsideDays={false}
                weekStartsOn={1}
                className={cn("cal-hr", {
                  "hide-rows": snap === lastSnapPoint,
                })}
              />
            </div>
          </div>

          {/* Drawer Content */}
          <Drawer.Content
            vaul-drawer-carousel=""
            className="border-b-none fixed inset-x-0 bottom-0 z-50 -mx-px flex h-full max-h-[97%] flex-col overflow-hidden rounded-t-2xl border bg-background outline-none"
          >
            <div className="sticky top-0 flex w-full items-center justify-center bg-background">
              <div className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
            </div>

            <div
              ref={contentRef}
              className={cn(
                "relative mx-auto flex w-full max-w-md flex-col overscroll-none px-4 py-2",
                {
                  "overflow-y-auto pb-20": snap === lastSnapPoint,
                  "overflow-hidden": snap !== lastSnapPoint,
                },
              )}
            >
              {/* Header Drawer */}
              <div
                className={cn("mb-16 flex w-full shrink-0 flex-col gap-3", {
                  hidden: snap === lastSnapPoint,
                })}
                onClick={() => handleSnapChange(lastSnapPoint)}
                style={{
                  height: drawerHeightStart
                    ? `calc(${snapPoints[0]} - 100px)`
                    : "auto",
                }}
              >
                <Drawer.Title className="text-[17px] font-semibold text-muted-foreground">
                  Upcoming
                </Drawer.Title>
                <Drawer.Description></Drawer.Description>
                <Event event={EVENTS[1]} />
              </div>

              <div className="mb-16 flex w-full flex-col gap-2">
                <h2 className="text-[17px] font-semibold text-muted-foreground">
                  Planned
                </h2>
                <DayViewCalendar />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="rounded-xl px-5 font-medium"
        >
          Dialog Calendar
        </Button>
      </DialogTrigger>

      <DialogContent
        className={cn(
          "max-w-4xl gap-0 overflow-hidden md:rounded-2xl md:border",
        )}
      >
        <DialogHeader className="h-0">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-x-10 divide-x md:grid-cols-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disableNavigation
            showOutsideDays={false}
            weekStartsOn={1}
            className={cn("cal-hr m-auto max-w-96", {
              "hide-rows": snap === lastSnapPoint,
            })}
          />

          <div className="flex w-full flex-col gap-2 pl-10">
            <h2 className="mt-2 text-[17px] font-semibold text-muted-foreground">
              Planned
            </h2>

            <div className="scrollbar-hide h-[350px] w-full overflow-auto">
              <DayViewCalendar />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
