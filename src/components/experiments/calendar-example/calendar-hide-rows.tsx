"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";

export const CalendarHideRows = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hideRows, setHideRows] = useState<boolean>(false);

  return (
    <>
      <div className="absolute bottom-6 flex items-center space-x-2">
        <Switch onCheckedChange={setHideRows} id="switch-cal-hr" />
        <label
          htmlFor="switch-cal-hr"
          className="select-none text-sm font-medium text-muted-foreground"
        >
          Hide Rows
        </label>
      </div>

      {/* Check app/globals.css for the CSS animation  */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disableNavigation
        className={cn("cal-hr", {
          "hide-rows": hideRows,
        })}
      />
    </>
  );
};
