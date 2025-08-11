"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ModeToggle from "@/components/themes/mode-toggle";
import { useBreadcrumb } from "./breadcrumb-context";
import React from "react";

export function Header() {
  const { breadcrumb } = useBreadcrumb();

  return (
    <header className="bg-background/60 backdrop-blur-md sticky top-0 z-50 flex h-12 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="flex items-center gap-2">{breadcrumb}</div>
      <div className="ml-auto mr-4">
        <ModeToggle />
      </div>
    </header>
  );
}
