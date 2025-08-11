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
import { University } from "../data/types";
import { Edit, Trash2, Search, Plus, ExternalLink, Mail, Phone } from "lucide-react";

interface UniversitiesTableProps {
  universities: University[];
  onEdit: (university: University) => void;
  onDelete: (university: University) => void;
  onCreate: () => void;
}

export default function UniversitiesTable({ 
  universities, 
  onEdit, 
  onDelete, 
  onCreate 
}: UniversitiesTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || university.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const formatStudentCount = (count: number) => {
    return count.toLocaleString();
  };

  return (
    <div className="space-y-4">
      {/* Header con búsqueda y filtros */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar universidades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full md:w-80"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={statusFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter('all')}
            >
              Todas ({universities.length})
            </Button>
            <Button
              variant={statusFilter === 'active' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter('active')}
            >
              Activas ({universities.filter(u => u.status === 'active').length})
            </Button>
            <Button
              variant={statusFilter === 'inactive' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter('inactive')}
            >
              Inactivas ({universities.filter(u => u.status === 'inactive').length})
            </Button>
          </div>
        </div>
        <Button onClick={onCreate} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Nueva Universidad
        </Button>
      </div>

      {/* Resultado de búsqueda */}
      {searchTerm && (
        <p className="text-sm text-gray-600">
          Mostrando {filteredUniversities.length} de {universities.length} universidades
        </p>
      )}

      {/* Tabla */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Universidad</TableHead>
              <TableHead>Código</TableHead>
              <TableHead>Ubicación</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Estudiantes</TableHead>
              <TableHead>Fundación</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUniversities.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                  {searchTerm ? 'No se encontraron universidades que coincidan con la búsqueda.' : 'No hay universidades registradas.'}
                </TableCell>
              </TableRow>
            ) : (
              filteredUniversities.map((university) => (
                <TableRow key={university.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{university.name}</span>
                      {university.website && (
                        <a
                          href={university.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Sitio web
                        </a>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{university.code}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{university.city}</div>
                      <div className="text-gray-500">{university.country}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={university.status === 'active' ? 'default' : 'secondary'}
                      className={university.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                    >
                      {university.status === 'active' ? 'Activa' : 'Inactiva'}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatStudentCount(university.studentsCount)}</TableCell>
                  <TableCell>{university.foundedYear}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      {university.email && (
                        <a
                          href={`mailto:${university.email}`}
                          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <Mail className="h-3 w-3" />
                          Email
                        </a>
                      )}
                      {university.phone && (
                        <a
                          href={`tel:${university.phone}`}
                          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <Phone className="h-3 w-3" />
                          Teléfono
                        </a>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEdit(university)}
                        className="flex items-center gap-1"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onDelete(university)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Información adicional */}
      {filteredUniversities.length > 0 && (
        <div className="text-sm text-gray-600 flex justify-between items-center">
          <span>Total: {filteredUniversities.length} universidades</span>
          <span>
            Estudiantes totales: {filteredUniversities.reduce((sum, u) => sum + u.studentsCount, 0).toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
}
