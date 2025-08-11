"use client";

import { useState, Suspense } from "react";
import { toast } from "react-hot-toast";
import BreadcrumbHeader from "@/components/shared/breadcrumb/breadcrumb-header";
import MajorStatsCards from "./components/major-stats-cards";
import MajorsTable from "./components/majors-table";
import MajorModal from "./components/major-modal";
import DeleteMajorModal from "./components/delete-major-modal";
import { useMajors } from "./hooks/use-majors";
import { Major, MajorFormData } from "./data/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function MajorsPage() {
  const { majors, isLoading, actions } = useMajors();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'create' | 'edit';
    major?: Major | null;
  }>({
    isOpen: false,
    mode: 'create',
    major: null,
  });
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    major?: Major | null;
  }>({
    isOpen: false,
    major: null,
  });

  const breadcrumbLinks = [
    {
      href: "/dashboard/home",
      label: "Dashboard",
    },
    {
      label: "Gestión de Carreras",
    },
  ];

  const handleCreateMajor = () => {
    setModalState({
      isOpen: true,
      mode: 'create',
      major: null,
    });
  };

  const handleEditMajor = (major: Major) => {
    setModalState({
      isOpen: true,
      mode: 'edit',
      major,
    });
  };

  const handleDeleteMajor = (major: Major) => {
    setDeleteModal({
      isOpen: true,
      major,
    });
  };

  const handleSaveMajor = async (formData: MajorFormData) => {
    try {
      if (modalState.mode === 'create') {
        await actions.createMajor(formData);
        toast.success('Carrera creada exitosamente');
      } else if (modalState.major) {
        await actions.updateMajor(modalState.major.id, formData);
        toast.success('Carrera actualizada exitosamente');
      }
    } catch (error) {
      toast.error('Error al guardar la carrera');
      console.error('Error al guardar la carrera:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (deleteModal.major) {
      try {
        await actions.deleteMajor(deleteModal.major.id);
        toast.success('Carrera eliminada exitosamente');
      } catch (error) {
        toast.error('Error al eliminar la carrera');
        console.error('Error al eliminar la carrera:', error);
      }
    }
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      mode: 'create',
      major: null,
    });
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      major: null,
    });
  };

  if (isLoading && majors.length === 0) {
    return (
      <div className="flex min-w-0 flex-1 flex-col">
        <BreadcrumbHeader links={breadcrumbLinks} />
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Gestión de Carreras</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
          
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <BreadcrumbHeader links={breadcrumbLinks} />
      <div className="flex flex-1 flex-col gap-6 p-6">
        <Suspense fallback={<Skeleton className="h-12 w-96" />}>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Gestión de Carreras</h1>
          </div>
        </Suspense>

        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        }>
          <MajorStatsCards majors={majors} />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <MajorsTable
            majors={majors}
            onCreate={handleCreateMajor}
            onEdit={handleEditMajor}
            onDelete={handleDeleteMajor}
          />
        </Suspense>

        <MajorModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          onSave={handleSaveMajor}
          major={modalState.major}
          mode={modalState.mode}
        />

        <DeleteMajorModal
          isOpen={deleteModal.isOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
          major={deleteModal.major}
        />
      </div>
    </div>
  );
}
