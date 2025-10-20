"use client";

import { GraduationCap, MapPin, Users, BookOpen } from "lucide-react";

export default function HeroUniversities() {
  const stats = [
    { label: "Universidades", value: "50+", icon: <GraduationCap className="h-5 w-5" /> },
    { label: "Estudiantes", value: "25K+", icon: <Users className="h-5 w-5" /> },
    { label: "Programas", value: "200+", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Ciudades", value: "15+", icon: <MapPin className="h-5 w-5" /> }
  ];

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/50 via-transparent to-blue-100/50 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-100/40 via-transparent to-orange-100/40 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 font-medium mb-6 border border-orange-200 dark:border-orange-800">
            <MapPin className="h-4 w-4 mr-2" />
            Educación Superior en Perú
          </div>

          {/* Main Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              Universidades del
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Perú
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre las mejores universidades del Perú. Conectamos estudiantes con instituciones de excelencia académica para forjar el futuro profesional que siempre has soñado.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-4 mx-auto">
                <span className="text-orange-600 dark:text-orange-400">{stat.icon}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}