"use client";

import { ThemeChange } from "@/components/theme-change";
import { FontSizeChange } from "@/components/font-size-change";
import { City } from "@/components/city";

export default function Page() {
  return (
    <div className="flex flex-col justify-start items-center gap-8 h-full w-full">
      <div className="px-6 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)]">
        <p className="text-lg">Make some adjustments here</p>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <span className="text-lg font-medium">Change your theme</span>
          <ThemeChange />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <span className="text-lg font-medium">Change your font size</span>
          <FontSizeChange />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <span className="text-lg font-medium">Change your location</span>
          <City />
        </div>
      </div>
    </div>
  );
}
