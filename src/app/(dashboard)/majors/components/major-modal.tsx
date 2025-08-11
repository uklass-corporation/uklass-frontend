"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Major, MajorFormData, degreeLabels, modalityLabels } from "../data/types";
import { mockUniversities } from "../../universities/data/mock-data";

interface MajorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: MajorFormData) => void;
  major?: Major | null;
  mode: 'create' | 'edit';
}

export default function MajorModal({ isOpen, onClose, onSave, major, mode }: MajorModalProps) {
  const [formData, setFormData] = useState<MajorFormData>(() => ({
    name: major?.name || '',
    code: major?.code || '',
    description: major?.description || '',
    universityId: major?.universityId || '',
    duration: major?.duration || 5,
    degree: major?.degree || 'bachelor',
    modality: major?.modality || 'presencial',
    status: major?.status || 'active',
    maxCapacity: major?.maxCapacity || undefined,
    tuitionFee: major?.tuitionFee || undefined,
    startDate: major?.startDate || undefined,
    endDate: major?.endDate || undefined,
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset form when major changes
  useEffect(() => {
    setFormData({
      name: major?.name || '',
      code: major?.code || '',
      description: major?.description || '',
      universityId: major?.universityId || '',
      duration: major?.duration || 5,
      degree: major?.degree || 'bachelor',
      modality: major?.modality || 'presencial',
      status: major?.status || 'active',
      maxCapacity: major?.maxCapacity || undefined,
      tuitionFee: major?.tuitionFee || undefined,
      startDate: major?.startDate || undefined,
      endDate: major?.endDate || undefined,
    });
    setErrors({});
  }, [major, isOpen]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.code.trim()) {
      newErrors.code = 'El código es requerido';
    }

    if (!formData.universityId) {
      newErrors.universityId = 'La universidad es requerida';
    }

    if (formData.duration < 1 || formData.duration > 12) {
      newErrors.duration = 'La duración debe estar entre 1 y 12 años';
    }

    if (formData.maxCapacity && formData.maxCapacity < 1) {
      newErrors.maxCapacity = 'La capacidad debe ser mayor a 0';
    }

    if (formData.tuitionFee && formData.tuitionFee < 0) {
      newErrors.tuitionFee = 'La mensualidad no puede ser negativa';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave(formData);
      onClose();
    }
  };

  const handleInputChange = (field: keyof MajorFormData, value: string | number | Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const handleClose = () => {
    onClose();
    setErrors({});
  };

  const activeUniversities = mockUniversities.filter(u => u.status === 'active');

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' ? 'Crear Nueva Carrera' : 'Editar Carrera'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'create' 
              ? 'Complete los datos para registrar una nueva carrera.' 
              : 'Modifique los datos de la carrera seleccionada.'
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información básica */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre de la Carrera *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Ej: Ingeniería de Sistemas"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">Código *</Label>
              <Input
                id="code"
                value={formData.code}
                onChange={(e) => handleInputChange('code', e.target.value.toUpperCase())}
                placeholder="Ej: IS001"
                className={errors.code ? 'border-red-500' : ''}
              />
              {errors.code && <p className="text-sm text-red-500">{errors.code}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Descripción de la carrera..."
              rows={3}
            />
          </div>

          {/* Universidad y configuración académica */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="universityId">Universidad *</Label>
              <Select 
                value={formData.universityId} 
                onValueChange={(value) => handleInputChange('universityId', value)}
              >
                <SelectTrigger className={errors.universityId ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Seleccionar universidad" />
                </SelectTrigger>
                <SelectContent>
                  {activeUniversities.map((university) => (
                    <SelectItem key={university.id} value={university.id}>
                      {university.name} ({university.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.universityId && <p className="text-sm text-red-500">{errors.universityId}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duración (años) *</Label>
              <Input
                id="duration"
                type="number"
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', parseInt(e.target.value) || 5)}
                placeholder="5"
                min="1"
                max="12"
                className={errors.duration ? 'border-red-500' : ''}
              />
              {errors.duration && <p className="text-sm text-red-500">{errors.duration}</p>}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Grado Académico</Label>
              <Select 
                value={formData.degree} 
                onValueChange={(value: 'bachelor' | 'master' | 'doctorate' | 'technical') => handleInputChange('degree', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar grado" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(degreeLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modality">Modalidad</Label>
              <Select 
                value={formData.modality} 
                onValueChange={(value: 'presencial' | 'virtual' | 'hibrida') => handleInputChange('modality', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar modalidad" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(modalityLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Estado</Label>
              <Select 
                value={formData.status} 
                onValueChange={(value: 'active' | 'inactive') => handleInputChange('status', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Activa</SelectItem>
                  <SelectItem value="inactive">Inactiva</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Información adicional */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="maxCapacity">Capacidad Máxima</Label>
              <Input
                id="maxCapacity"
                type="number"
                value={formData.maxCapacity || ''}
                onChange={(e) => handleInputChange('maxCapacity', e.target.value ? parseInt(e.target.value) : undefined)}
                placeholder="100"
                min="1"
                className={errors.maxCapacity ? 'border-red-500' : ''}
              />
              {errors.maxCapacity && <p className="text-sm text-red-500">{errors.maxCapacity}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tuitionFee">Mensualidad (S/)</Label>
              <Input
                id="tuitionFee"
                type="number"
                value={formData.tuitionFee || ''}
                onChange={(e) => handleInputChange('tuitionFee', e.target.value ? parseFloat(e.target.value) : undefined)}
                placeholder="2500.00"
                min="0"
                step="0.01"
                className={errors.tuitionFee ? 'border-red-500' : ''}
              />
              {errors.tuitionFee && <p className="text-sm text-red-500">{errors.tuitionFee}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Fecha de Inicio</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate ? formData.startDate.toISOString().split('T')[0] : ''}
                onChange={(e) => handleInputChange('startDate', e.target.value ? new Date(e.target.value) : undefined)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">Fecha de Fin</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate ? formData.endDate.toISOString().split('T')[0] : ''}
                onChange={(e) => handleInputChange('endDate', e.target.value ? new Date(e.target.value) : undefined)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit">
              {mode === 'create' ? 'Crear Carrera' : 'Guardar Cambios'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
