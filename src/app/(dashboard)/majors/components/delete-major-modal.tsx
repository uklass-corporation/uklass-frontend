"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Major } from "../data/types";

interface DeleteMajorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  major?: Major | null;
}

export default function DeleteMajorModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  major 
}: DeleteMajorModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Se eliminará permanentemente la carrera{' '}
            <strong>&quot;{major?.name}&quot;</strong> de{' '}
            <strong>{major?.universityName}</strong> del sistema.
            {major && major.studentsEnrolled > 0 && (
              <span className="block mt-2 text-amber-600">
                ⚠️ Atención: Esta carrera tiene {major.studentsEnrolled} estudiantes inscritos.
              </span>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
          >
            Eliminar Carrera
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
