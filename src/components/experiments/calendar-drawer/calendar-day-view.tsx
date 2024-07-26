"use client";

import type { Event } from "@/types";
import { Clock4 } from "lucide-react";

import { EVENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const hours = Array.from(
  { length: 24 },
  (_, i) => `${i < 10 ? "0" : ""}${i}:00`,
);

export function DayViewCalendar() {
  return (
    <div className="flex flex-auto flex-col overflow-auto">
      <div className="flex w-full flex-auto">
        <div className="w-12 flex-none" />
        <div className="grid flex-auto grid-cols-1 grid-rows-1">
          {/* Horizontal lines */}
          <div
            className="col-start-1 col-end-2 row-start-1 grid divide-y divide-muted-foreground/20"
            style={{ gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))" }}
          >
            <div className="row-end-1 h-7"></div>
            {hours.map((hour, index) => (
              <>
                <div key={index}>
                  <div className="sticky left-0 -ml-14 -mt-2.5 w-10 pr-2 text-right text-[13px] font-medium leading-5 text-muted-foreground">
                    {hour}
                  </div>
                </div>
                <div />
              </>
            ))}
          </div>

          {/* Events */}
          <ol
            className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
            style={{
              gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
            }}
          >
            {EVENTS.map((event: Event) => (
              <Event event={event} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function Event({ event }: { event: Event }) {
  const convertTimeToMinutes = (time: string) => {
    const date = new Date(time);
    return date.getHours() * 60 + date.getMinutes();
  };

  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const startMinutes = convertTimeToMinutes(event.startTime);
  const endMinutes = convertTimeToMinutes(event.endTime);
  const unit = 5; // Each row represents 5 minutes

  // Calculate the starting row and the duration in rows
  const startRow = Math.floor(startMinutes / unit) + 2; // 1-based index adjusted
  const spanRows = Math.ceil((endMinutes - startMinutes) / unit);

  return (
    <li
      key={event.id}
      className="relative mt-px flex size-full"
      style={{ gridRow: `${startRow} / span ${spanRows}` }}
    >
      <a
        href="#"
        className={cn(
          "group absolute inset-1 flex flex-col gap-1 overflow-y-auto rounded-lg p-3 text-sm font-medium",
          event.bgColor,
        )}
      >
        <h3 className="truncate text-lg font-bold">{event.title}</h3>
        <div className="flex items-center text-[15px] text-foreground text-opacity-75 dark:text-opacity-100">
          <Clock4 className="mr-1.5 size-4" />
          <time dateTime={event.startTime}>
            {`${formatTime(event.startTime)} - ${formatTime(event.endTime)}`}
          </time>
        </div>
        <p className="mt-0.5 text-pretty text-[15px] text-foreground/80">
          {event.description}
        </p>
      </a>
    </li>
  );
}
