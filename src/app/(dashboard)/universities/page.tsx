"use client";

import { useState, Suspense } from "react";
import { toast } from "react-hot-toast";
import BreadcrumbHeader from "@/components/shared/breadcrumb/breadcrumb-header";
import UniversityStatsCards from "./components/university-stats-cards";
import UniversitiesTable from "./components/universities-table";
import UniversityModal from "./components/university-modal";
import DeleteUniversityModal from "./components/delete-university-modal";
import { useUniversities } from "./hooks/use-universities";
import { University, UniversityFormData } from "./data/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function UniversitiesPage() {
  const { universities, isLoading, actions } = useUniversities();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'create' | 'edit';
    university?: University | null;
  }>({
    isOpen: false,
    mode: 'create',
    university: null,
  });
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    university?: University | null;
  }>({
    isOpen: false,
    university: null,
  });

  const breadcrumbLinks = [
    {
      href: "/dashboard/home",
      label: "Dashboard",
    },
    {
      label: "Gestión de Universidades",
    },
  ];

  const handleCreateUniversity = () => {
    setModalState({
      isOpen: true,
      mode: 'create',
      university: null,
    });
  };

  const handleEditUniversity = (university: University) => {
    setModalState({
      isOpen: true,
      mode: 'edit',
      university,
    });
  };

  const handleDeleteUniversity = (university: University) => {
    setDeleteModal({
      isOpen: true,
      university,
    });
  };

  const handleSaveUniversity = async (formData: UniversityFormData) => {
    try {
      if (modalState.mode === 'create') {
        await actions.createUniversity(formData);
        toast.success('Universidad creada exitosamente');
      } else if (modalState.university) {
        await actions.updateUniversity(modalState.university.id, formData);
        toast.success('Universidad actualizada exitosamente');
      }
    } catch (error) {
      toast.error('Error al guardar la universidad');
      console.error('Error al guardar la universidad:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (deleteModal.university) {
      try {
        await actions.deleteUniversity(deleteModal.university.id);
        toast.success('Universidad eliminada exitosamente');
      } catch (error) {
        toast.error('Error al eliminar la universidad');
        console.error('Error al eliminar la universidad:', error);
      }
    }
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      mode: 'create',
      university: null,
    });
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      university: null,
    });
  };

  if (isLoading && universities.length === 0) {
    return (
      <div className="flex min-w-0 flex-1 flex-col">
        <BreadcrumbHeader links={breadcrumbLinks} />
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Gestión de Universidades</h1>
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
            <h1 className="text-3xl font-bold">Gestión de Universidades</h1>
          </div>
        </Suspense>

        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        }>
          <UniversityStatsCards universities={universities} />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <UniversitiesTable
            universities={universities}
            onCreate={handleCreateUniversity}
            onEdit={handleEditUniversity}
            onDelete={handleDeleteUniversity}
          />
        </Suspense>

        <UniversityModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          onSave={handleSaveUniversity}
          university={modalState.university}
          mode={modalState.mode}
        />

        <DeleteUniversityModal
          isOpen={deleteModal.isOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
          university={deleteModal.university}
        />
      </div>
    </div>
  );
}
