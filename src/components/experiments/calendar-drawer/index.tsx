import { HeaderSection } from "@/components/shared/header-section";
import { UIShell } from "@/components/shared/ui-shell";

import { DrawerCalendar } from "./drawer-calendar";

export function CalendarDrawerSection() {
  return (
    <div className="flex flex-col gap-y-6">
      <HeaderSection
        title="Calendar with Drawer"
        text="Daily schedule with shadcn's calendar/drawer components"
      />
      <UIShell
        className="flex h-[250px] items-center justify-center"
        githubUrl="https://github.com/mickasmt/ui-hub/tree/main/src/components/experiments/calendar-drawer"
      >
        <DrawerCalendar />
      </UIShell>
    </div>
  );
}
