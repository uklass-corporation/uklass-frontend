"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings,
  Users,
  CreditCard,
  BarChart3,
  GraduationCap,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const data = {
  company: {
    name: "UKLASS",
    email: "admin@uklass.com",
    avatar: "/next.svg",
  },

  navGroups: [
    {
      label: "General",
      items: [
        {
          title: "Home",
          url: "/home",
          icon: LayoutDashboard,
          collapsible: false,
        },
      ],
    },
    {
      label: "Gestión Académica",
      items: [
        {
          title: "Usuarios",
          url: "/users",
          icon: Users,
          collapsible: false,
        },
        {
          title: "Cursos",
          url: "/courses",
          icon: GraduationCap,
          collapsible: false,
        },
        {
          title: "Universidades",
          url: "/universities",
          icon: GalleryVerticalEnd,
          collapsible: false,
        },
        {
          title: "Carreras",
          url: "/majors",
          icon: AudioWaveform,
          collapsible: false,
        },
      ],
    },
    {
      label: "Administración",
      items: [
        {
          title: "Pagos",
          url: "/payments",
          icon: CreditCard,
          collapsible: false,
        },
        {
          title: "Reportes",
          url: "/reports",
          icon: BarChart3,
          collapsible: false,
        },
        {
          title: "Configuración",
          url: "/configs",
          icon: Settings,
          collapsible: false,
        },
      ],
    },
    {
      label: "Soporte",
      items: [
        {
          title: "Centro de ayuda",
          url: "/help",
          icon: Command,
          collapsible: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, state } = useSidebar();
  console.log(isMobile);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 p-2 flex-wrap min-w-0">
          <Image
            src={data.company.avatar}
            alt={data.company.name}
            className="w-8 h-8 rounded-full object-cover"
            width={40}
            height={40}
          />
          {!isMobile && state === "expanded" && (
            <div className="min-w-0">
              <div className="font-semibold">{data.company.name}</div>
              <div className="text-xs text-muted-foreground">
                {data.company.email}
              </div>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={data.navGroups} />
      </SidebarContent>
      <SidebarFooter className="pb-4 mx-2">
        {/* <NavUser user={data.company} /> */}
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
