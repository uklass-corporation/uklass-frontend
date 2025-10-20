"use client";

import { BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

interface Program {
  id: number;
  name: string;
  category: string;
  duration: string;
  students: string;
  universities: number;
  growth: string;
  description: string;
  icon: React.ReactNode;
  color: "orange" | "blue";
}

export default function FeaturedPrograms() {
  const programs: Program[] = [
    {
      id: 1,
      name: "Ingeniería de Sistemas",
      category: "Tecnología",
      duration: "5 años",
      students: "8K+",
      universities: 25,
      growth: "+15%",
      description: "Formación integral en desarrollo de software, sistemas de información y tecnologías emergentes.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "orange"
    },
    {
      id: 2,
      name: "Medicina Humana",
      category: "Salud",
      duration: "7 años",
      students: "6K+",
      universities: 18,
      growth: "+8%",
      description: "Carrera de alta demanda enfocada en la formación de profesionales de la salud de excelencia.",
      icon: <Award className="h-6 w-6" />,
      color: "blue"
    },
    {
      id: 3,
      name: "Administración de Empresas",
      category: "Negocios",
      duration: "5 años",
      students: "12K+",
      universities: 30,
      growth: "+12%",
      description: "Desarrollo de habilidades gerenciales y empresariales para liderar organizaciones exitosas.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "orange"
    },
    {
      id: 4,
      name: "Psicología",
      category: "Ciencias Sociales",
      duration: "5 años",
      students: "7K+",
      universities: 22,
      growth: "+10%",
      description: "Estudio del comportamiento humano con enfoque clínico, educativo y organizacional.",
      icon: <Users className="h-6 w-6" />,
      color: "blue"
    },
    {
      id: 5,
      name: "Derecho",
      category: "Ciencias Jurídicas",
      duration: "6 años",
      students: "9K+",
      universities: 28,
      growth: "+6%",
      description: "Formación jurídica integral para el ejercicio de la abogacía y la justicia social.",
      icon: <Award className="h-6 w-6" />,
      color: "orange"
    },
    {
      id: 6,
      name: "Arquitectura",
      category: "Diseño",
      duration: "6 años",
      students: "4K+",
      universities: 15,
      growth: "+9%",
      description: "Diseño y construcción de espacios que mejoren la calidad de vida de las personas.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-100/60 via-transparent to-blue-100/60 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100/50 via-transparent to-orange-100/50 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 font-medium mb-6 border border-orange-200 dark:border-orange-800">
            <TrendingUp className="h-4 w-4 mr-2" />
            Programas Más Demandados
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Carreras con Mayor
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Proyección Profesional
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre las carreras universitarias con mayor demanda laboral y mejores oportunidades de crecimiento
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 ${
                  program.color === 'orange' 
                    ? 'bg-orange-100 dark:bg-orange-900/30' 
                    : 'bg-blue-100 dark:bg-blue-900/30'
                } rounded-xl group-hover:scale-110 transition-all duration-300`}>
                  <span className={`${
                    program.color === 'orange' 
                      ? 'text-orange-600 dark:text-orange-400' 
                      : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {program.icon}
                  </span>
                </div>
                
                {/* Growth Badge */}
                <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-lg text-xs font-bold">
                  <TrendingUp className="h-3 w-3" />
                  <span>{program.growth}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Category */}
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
                  {program.category}
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold leading-tight transition-colors duration-300 ${
                  program.color === 'orange'
                    ? 'text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400'
                    : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                }`}>
                  {program.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {program.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-gray-600 dark:text-gray-400 mb-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">Duración</span>
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{program.duration}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-gray-600 dark:text-gray-400 mb-1">
                      <Users className="h-3 w-3" />
                      <span className="text-xs">Estudiantes</span>
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{program.students}</div>
                  </div>
                </div>

                {/* Universities Count */}
                <div className="pt-2">
                  <div className="flex items-center justify-center space-x-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <BookOpen className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Disponible en <span className="font-bold text-gray-900 dark:text-white">{program.universities}</span> universidades
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}