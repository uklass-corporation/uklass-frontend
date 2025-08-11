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

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
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
          title: "home",
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
          url: "/cursos",
          icon: GraduationCap,
          collapsible: false,
        },
        {
          title: "Universidades",
          url: "/universidades",
          icon: GalleryVerticalEnd,
          collapsible: false,
        },
        {
          title: "Carreras",
          url: "/carreras",
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
          url: "/pagos",
          icon: CreditCard,
          collapsible: false,
        },
        {
          title: "Reportes",
          url: "/reportes",
          icon: BarChart3,
          collapsible: false,
        },
        {
          title: "Configuración",
          url: "/configuracion",
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
          url: "/ayuda",
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
          <img
            src={data.company.avatar}
            alt={data.company.name}
            className="w-10 h-10 rounded-full object-cover"
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
      <SidebarFooter>
        <NavUser user={data.company} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
