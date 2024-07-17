import { cn } from "@/lib/utils";

export function UIShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-second-accent border border-border rounded-xl p-4 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}