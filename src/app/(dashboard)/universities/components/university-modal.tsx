"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { University, UniversityFormData } from "../data/types";

interface UniversityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: UniversityFormData) => void;
  university?: University | null;
  mode: 'create' | 'edit';
}

export default function UniversityModal({ isOpen, onClose, onSave, university, mode }: UniversityModalProps) {
  const [formData, setFormData] = useState<UniversityFormData>(() => ({
    name: university?.name || '',
    code: university?.code || '',
    country: university?.country || '',
    city: university?.city || '',
    website: university?.website || '',
    email: university?.email || '',
    phone: university?.phone || '',
    status: university?.status || 'active',
    foundedYear: university?.foundedYear || new Date().getFullYear(),
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.code.trim()) {
      newErrors.code = 'El código es requerido';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'El país es requerido';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'La ciudad es requerida';
    }

    if (formData.foundedYear < 1000 || formData.foundedYear > new Date().getFullYear()) {
      newErrors.foundedYear = 'Año de fundación inválido';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave(formData);
      onClose();
      setFormData({
        name: '',
        code: '',
        country: '',
        city: '',
        website: '',
        email: '',
        phone: '',
        status: 'active',
        foundedYear: new Date().getFullYear(),
      });
      setErrors({});
    }
  };

  const handleInputChange = (field: keyof UniversityFormData, value: string | number) => {
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

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' ? 'Crear Nueva Universidad' : 'Editar Universidad'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'create' 
              ? 'Complete los datos para registrar una nueva universidad.' 
              : 'Modifique los datos de la universidad seleccionada.'
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Nombre de la universidad"
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
                placeholder="Ej: UNMSM"
                className={errors.code ? 'border-red-500' : ''}
              />
              {errors.code && <p className="text-sm text-red-500">{errors.code}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">País *</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                placeholder="País"
                className={errors.country ? 'border-red-500' : ''}
              />
              {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Ciudad *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Ciudad"
                className={errors.city ? 'border-red-500' : ''}
              />
              {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="foundedYear">Año de Fundación *</Label>
              <Input
                id="foundedYear"
                type="number"
                value={formData.foundedYear}
                onChange={(e) => handleInputChange('foundedYear', parseInt(e.target.value) || new Date().getFullYear())}
                placeholder="Año"
                min="1000"
                max={new Date().getFullYear()}
                className={errors.foundedYear ? 'border-red-500' : ''}
              />
              {errors.foundedYear && <p className="text-sm text-red-500">{errors.foundedYear}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Estado</Label>
              <Select value={formData.status} onValueChange={(value: 'active' | 'inactive') => handleInputChange('status', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="inactive">Inactivo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Sitio Web</Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              placeholder="https://ejemplo.edu.pe"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="contacto@universidad.edu"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+51-1-1234567"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit">
              {mode === 'create' ? 'Crear Universidad' : 'Guardar Cambios'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
