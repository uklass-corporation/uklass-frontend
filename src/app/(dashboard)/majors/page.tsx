"use client";

import { Suspense } from "react";
import BreadcrumbHeader from "@/components/shared/breadcrumb/breadcrumb-header";

export default function MajorPage() {
  const breadcrumbLinks = [
    {
      href: "/home/carreras",
      label: "Dashboard",
    },
    {
      label: "Gestión de carreras",
    },
  ];

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <BreadcrumbHeader links={breadcrumbLinks} />
      <div className="flex flex-1 flex-col gap-4 p-2">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Gestión de Carreras</h1>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
