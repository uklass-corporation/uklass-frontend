"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Major, degreeLabels, modalityLabels } from "../data/types";
import { Edit, Trash2, Search, Plus, Users, Clock, DollarSign } from "lucide-react";

interface MajorsTableProps {
  majors: Major[];
  onEdit: (major: Major) => void;
  onDelete: (major: Major) => void;
  onCreate: () => void;
}

export default function MajorsTable({ 
  majors, 
  onEdit, 
  onDelete, 
  onCreate 
}: MajorsTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [universityFilter, setUniversityFilter] = useState<'all' | string>('all');
  const [degreeFilter, setDegreeFilter] = useState<'all' | string>('all');

  const uniqueUniversities = Array.from(new Set(majors.map(m => m.universityName))).sort();

  const filteredMajors = majors.filter(major => {
    const matchesSearch = major.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         major.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         major.universityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         major.universityCode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || major.status === statusFilter;
    const matchesUniversity = universityFilter === 'all' || major.universityName === universityFilter;
    const matchesDegree = degreeFilter === 'all' || major.degree === degreeFilter;

    return matchesSearch && matchesStatus && matchesUniversity && matchesDegree;
  });

  const formatCurrency = (amount?: number) => {
    if (!amount) return 'No especificado';
    return `S/ ${amount.toLocaleString()}`;
  };

  const getCapacityStatus = (enrolled: number, max?: number) => {
    if (!max) return { status: 'Sin límite', color: 'text-gray-500' };
    const percentage = (enrolled / max) * 100;
    if (percentage >= 90) return { status: 'Lleno', color: 'text-red-600' };
    if (percentage >= 70) return { status: 'Alto', color: 'text-orange-600' };
    return { status: 'Disponible', color: 'text-green-600' };
  };

  return (
    <div className="space-y-4">
      {/* Header con búsqueda y filtros */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar carreras, códigos o universidades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full md:w-80"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Select value={statusFilter} onValueChange={(value: 'all' | 'active' | 'inactive') => setStatusFilter(value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos ({majors.length})</SelectItem>
                <SelectItem value="active">Activas ({majors.filter(m => m.status === 'active').length})</SelectItem>
                <SelectItem value="inactive">Inactivas ({majors.filter(m => m.status === 'inactive').length})</SelectItem>
              </SelectContent>
            </Select>

            <Select value={universityFilter} onValueChange={setUniversityFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Todas las universidades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las universidades</SelectItem>
                {uniqueUniversities.map((university) => (
                  <SelectItem key={university} value={university}>
                    {university}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={degreeFilter} onValueChange={setDegreeFilter}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Todos los grados" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                {Object.entries(degreeLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button onClick={onCreate} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Nueva Carrera
        </Button>
      </div>

      {/* Resultado de búsqueda */}
      {(searchTerm || statusFilter !== 'all' || universityFilter !== 'all' || degreeFilter !== 'all') && (
        <p className="text-sm text-gray-600">
          Mostrando {filteredMajors.length} de {majors.length} carreras
        </p>
      )}

      {/* Tabla */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Carrera</TableHead>
              <TableHead>Universidad</TableHead>
              <TableHead>Grado/Modalidad</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Estudiantes</TableHead>
              <TableHead>Duración</TableHead>
              <TableHead>Mensualidad</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMajors.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                  {searchTerm || statusFilter !== 'all' || universityFilter !== 'all' || degreeFilter !== 'all'
                    ? 'No se encontraron carreras que coincidan con los filtros aplicados.' 
                    : 'No hay carreras registradas.'}
                </TableCell>
              </TableRow>
            ) : (
              filteredMajors.map((major) => {
                const capacityStatus = getCapacityStatus(major.studentsEnrolled, major.maxCapacity);
                return (
                  <TableRow key={major.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{major.name}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {major.code}
                          </Badge>
                          {major.description && (
                            <span className="text-xs text-gray-500 truncate max-w-48">
                              {major.description}
                            </span>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{major.universityName}</span>
                        <Badge variant="secondary" className="text-xs w-fit">
                          {major.universityCode}
                        </Badge>
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className="w-fit">
                          {degreeLabels[major.degree]}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {modalityLabels[major.modality]}
                        </span>
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <Badge 
                        variant={major.status === 'active' ? 'default' : 'secondary'}
                        className={major.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                      >
                        {major.status === 'active' ? 'Activa' : 'Inactiva'}
                      </Badge>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3 text-gray-400" />
                          <span className="text-sm">{major.studentsEnrolled}</span>
                        </div>
                        {major.maxCapacity && (
                          <div className="text-xs">
                            <span className="text-gray-400">/ {major.maxCapacity}</span>
                            <div className={`text-xs ${capacityStatus.color}`}>
                              {capacityStatus.status}
                            </div>
                          </div>
                        )}
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{major.duration} años</span>
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{formatCurrency(major.tuitionFee)}</span>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onEdit(major)}
                          className="flex items-center gap-1"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onDelete(major)}
                          className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Información adicional */}
      {filteredMajors.length > 0 && (
        <div className="text-sm text-gray-600 flex justify-between items-center">
          <span>Total: {filteredMajors.length} carreras</span>
          <span>
            Estudiantes totales: {filteredMajors.reduce((sum, m) => sum + m.studentsEnrolled, 0).toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
}
