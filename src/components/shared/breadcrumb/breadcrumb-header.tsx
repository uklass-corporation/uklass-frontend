"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ModeToggle from "@/components/themes/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

interface BreadcrumbLink {
  href?: string;
  label: string;
}

interface BreadcrumbHeaderProps {
  links: BreadcrumbLink[];
}

export default function BreadcrumbHeader({ links }: BreadcrumbHeaderProps) {
  return (
    <header className="bg-background/60 backdrop-blur-md sticky top-0 z-50 flex h-12 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="flex items-center gap-2">
        <Breadcrumb>
          <BreadcrumbList>
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {link.href ? (
                    <BreadcrumbLink href={link.href}>
                      {link.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{link.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < links.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto mr-4">
        <ModeToggle />
      </div>
    </header>
  );
}
