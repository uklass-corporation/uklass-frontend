"use client";

import { useState } from "react";
import { MapPin, Users, BookOpen, Star, Search, Filter, ExternalLink } from "lucide-react";
import Link from "next/link";

interface University {
  id: number;
  name: string;
  city: string;
  type: "pública" | "privada";
  founded: number;
  students: string;
  programs: number;
  rating: number;
  description: string;
  website: string;
  specialties: string[];
  image: string;
}

export default function UniversitiesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "pública" | "privada">("all");
  const [filterCity, setFilterCity] = useState<string>("all");

  const universities: University[] = [
    {
      id: 1,
      name: "Universidad Nacional Mayor de San Marcos",
      city: "Lima",
      type: "pública",
      founded: 1551,
      students: "45K+",
      programs: 65,
      rating: 4.8,
      description: "La universidad más antigua de América, reconocida por su excelencia académica y tradición histórica.",
      website: "https://unmsm.edu.pe",
      specialties: ["Medicina", "Ingeniería", "Derecho", "Ciencias Sociales"],
      image: "bg-gradient-to-br from-red-500/20 to-yellow-600/20"
    },
    {
      id: 2,
      name: "Pontificia Universidad Católica del Perú",
      city: "Lima",
      type: "privada",
      founded: 1917,
      students: "25K+",
      programs: 45,
      rating: 4.9,
      description: "Universidad privada líder en investigación y formación integral de profesionales de excelencia.",
      website: "https://pucp.edu.pe",
      specialties: ["Ingeniería", "Administración", "Psicología", "Arquitectura"],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
    },
    {
      id: 3,
      name: "Universidad Nacional de Ingeniería",
      city: "Lima",
      type: "pública",
      founded: 1876,
      students: "15K+",
      programs: 28,
      rating: 4.7,
      description: "Especializada en ingeniería y tecnología, formando profesionales técnicos de alto nivel.",
      website: "https://uni.edu.pe",
      specialties: ["Ingeniería Civil", "Ingeniería de Sistemas", "Arquitectura", "Ingeniería Industrial"],
      image: "bg-gradient-to-br from-green-500/20 to-teal-600/20"
    },
    {
      id: 4,
      name: "Universidad de Lima",
      city: "Lima",
      type: "privada",
      founded: 1962,
      students: "20K+",
      programs: 35,
      rating: 4.6,
      description: "Universidad privada reconocida por su calidad académica y vinculación con el sector empresarial.",
      website: "https://ulima.edu.pe",
      specialties: ["Administración", "Comunicaciones", "Ingeniería", "Psicología"],
      image: "bg-gradient-to-br from-orange-500/20 to-red-600/20"
    },
    {
      id: 5,
      name: "Universidad Nacional del Callao",
      city: "Callao",
      type: "pública",
      founded: 1966,
      students: "18K+",
      programs: 32,
      rating: 4.3,
      description: "Universidad pública enfocada en ciencias de la salud, ingeniería y ciencias sociales.",
      website: "https://unac.edu.pe",
      specialties: ["Medicina", "Enfermería", "Ingeniería Pesquera", "Administración"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20"
    },
    {
      id: 6,
      name: "Universidad Nacional de Trujillo",
      city: "Trujillo",
      type: "pública",
      founded: 1824,
      students: "22K+",
      programs: 38,
      rating: 4.5,
      description: "Universidad histórica del norte del país, destacada en medicina, ingeniería y ciencias sociales.",
      website: "https://unitru.edu.pe",
      specialties: ["Medicina", "Ingeniería", "Educación", "Arqueología"],
      image: "bg-gradient-to-br from-purple-500/20 to-pink-600/20"
    },
    {
      id: 7,
      name: "Universidad Peruana Cayetano Heredia",
      city: "Lima",
      type: "privada",
      founded: 1961,
      students: "8K+",
      programs: 25,
      rating: 4.8,
      description: "Universidad especializada en ciencias de la salud y biomédicas de prestigio internacional.",
      website: "https://upch.edu.pe",
      specialties: ["Medicina", "Odontología", "Psicología", "Biología"],
      image: "bg-gradient-to-br from-emerald-500/20 to-green-600/20"
    },
    {
      id: 8,
      name: "Universidad Nacional de San Agustín",
      city: "Arequipa",
      type: "pública",
      founded: 1828,
      students: "35K+",
      programs: 55,
      rating: 4.4,
      description: "Principal universidad del sur del país, reconocida por su tradición académica y calidad educativa.",
      website: "https://unsa.edu.pe",
      specialties: ["Ingeniería", "Medicina", "Derecho", "Agricultura"],
      image: "bg-gradient-to-br from-yellow-500/20 to-orange-600/20"
    }
  ];

  const cities = ["all", ...Array.from(new Set(universities.map(u => u.city)))];

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || university.type === filterType;
    const matchesCity = filterCity === "all" || university.city === filterCity;
    
    return matchesSearch && matchesType && matchesCity;
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/60 via-transparent to-blue-100/60 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-100/50 via-transparent to-orange-100/50 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6 border border-blue-200 dark:border-blue-800">
            <BookOpen className="h-4 w-4 mr-2" />
            Directorio Universitario
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Explora las Mejores
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Universidades
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Encuentra la universidad perfecta para tu futuro profesional
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar universidades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Filtros:</span>
            </div>
            
            {/* Type Filter */}
            <div className="flex space-x-2">
              {(["all", "pública", "privada"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filterType === type
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                  }`}
                >
                  {type === "all" ? "Todas" : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* City Filter */}
            <select
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city === "all" ? "Todas las ciudades" : city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              {/* University Image/Background */}
              <div className={`h-48 ${university.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-gray-800/80 to-transparent"></div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    university.type === "pública" 
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                  }`}>
                    {university.type.charAt(0).toUpperCase() + university.type.slice(1)}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-gray-900 dark:text-white">{university.rating}</span>
                  </div>
                </div>

                {/* Founded Year */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-gray-900 dark:text-white">
                    Fundada en {university.founded}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* University Name */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {university.name}
                </h3>

                {/* Location */}
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{university.city}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                  {university.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{university.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{university.programs} programas</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1">
                  {university.specialties.slice(0, 3).map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-md font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                  {university.specialties.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium">
                      +{university.specialties.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Visitar Sitio Web
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No se encontraron universidades
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Intenta ajustar tus filtros o términos de búsqueda
            </p>
          </div>
        )}
      </div>
    </section>
  );
}