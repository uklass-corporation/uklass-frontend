"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ModeToggle from "@/components/themes/mode-toggle";
import { HeaderUser } from "@/components/shared/header/header-user";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbLink {
  href?: string;
  label: string;
}

interface BreadcrumbHeaderProps {
  links: BreadcrumbLink[];
}

export default function BreadcrumbHeader({ links }: BreadcrumbHeaderProps) {
  const data = {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  };

  return (
    <header className="bg-background/60 backdrop-blur-md my-4 pb-4 sticky top-0 z-50 flex h-12 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="flex items-center gap-2 ">
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
      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
        <Button variant="ghost" aria-label="Notificaciones">
          <Bell className="w-4 h-4" />
        </Button>
        {/* <HeaderUser user={data.user} /> */}
        <NavUser user={data.user} />
      </div>
    </header>
  );
}
