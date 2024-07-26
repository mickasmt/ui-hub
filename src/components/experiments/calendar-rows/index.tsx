import { HeaderSection } from "@/components/shared/header-section";
import { UIShell } from "@/components/shared/ui-shell";

import { CalendarHideRows } from "./calendar-hide-rows";

export function CalendarRowsExample() {
  return (
    <div className="flex flex-col gap-y-6">
      <HeaderSection
        title="Calendar Rows"
        text="Hide rows inside shadcn's calendar component."
      />
      <UIShell
        className="flex h-[420px] items-start justify-center pt-4"
        // githubUrl="https://github.com/mickasmt/ui-hub/tree/main/src/components/experiments/calendar-example"
      >
        <CalendarHideRows />
      </UIShell>
    </div>
  );
}
