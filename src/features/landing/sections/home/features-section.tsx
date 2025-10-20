"use client";

import { useState } from "react";
import { BookOpen, Users, Award, Globe, Play, ChevronRight, Star, Zap, Shield, Target } from "lucide-react";
import Link from "next/link";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <BookOpen className="h-5 w-5" />,
    title: "Cursos Interactivos",
    description: "Aprende haciendo con proyectos reales y ejercicios prácticos que te preparan para el mundo laboral.",
    stats: "1,200+ cursos",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30"
  },
  {
    id: 2,
    icon: <Users className="h-5 w-5" />,
    title: "Comunidad Global",
    description: "Conecta con estudiantes y profesionales de todo el mundo. Networking que impulsa tu carrera.",
    stats: "50K+ estudiantes",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    id: 3,
    icon: <Award className="h-5 w-5" />,
    title: "Certificaciones",
    description: "Obtén certificados reconocidos por la industria que validen tus nuevas habilidades.",
    stats: "98% empleabilidad",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30"
  },
  {
    id: 4,
    icon: <Globe className="h-5 w-5" />,
    title: "Acceso 24/7",
    description: "Estudia cuando quieras, donde quieras. Contenido disponible en múltiples dispositivos.",
    stats: "Disponible siempre",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    id: 5,
    icon: <Zap className="h-5 w-5" />,
    title: "Aprendizaje Acelerado",
    description: "Metodología probada que reduce el tiempo de aprendizaje sin comprometer la calidad.",
    stats: "3x más rápido",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30"
  },
  {
    id: 6,
    icon: <Shield className="h-5 w-5" />,
    title: "Garantía de Calidad",
    description: "Todos nuestros cursos pasan por rigurosos controles de calidad y actualizaciones constantes.",
    stats: "100% garantizado",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  }
];

const stats = [
  { label: "Estudiantes Activos", value: "50K+", icon: <Users className="h-4 w-4" />, color: "text-blue-600 dark:text-blue-400" },
  { label: "Cursos Disponibles", value: "1,200+", icon: <BookOpen className="h-4 w-4" />, color: "text-orange-600 dark:text-orange-400" },
  { label: "Instructores Expertos", value: "500+", icon: <Award className="h-4 w-4" />, color: "text-blue-600 dark:text-blue-400" },
  { label: "Países", value: "120+", icon: <Globe className="h-4 w-4" />, color: "text-orange-600 dark:text-orange-400" }
];

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/60 via-transparent to-blue-100/60 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-100/50 via-transparent to-orange-100/50 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-4 border border-blue-200 dark:border-blue-800">
            <Target className="h-4 w-4 mr-2" />
            Características Principales
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Todo lo que Necesitas
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              para Triunfar
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una plataforma completa diseñada para acelerar tu crecimiento profesional
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className={`flex items-center justify-center w-8 h-8 ${stat.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-orange-100 dark:bg-orange-900/30'} rounded-lg mb-2 mx-auto`}>
                <span className={stat.color}>{stat.icon}</span>
              </div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-12 h-12 ${feature.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-all duration-300`}>
                <span className={feature.color}>{feature.icon}</span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                  <span className={`text-sm font-medium ${feature.color}`}>
                    {feature.stats}
                  </span>
                  
                  <div className={`transition-all duration-300 ${
                    hoveredFeature === feature.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                  }`}>
                    <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-orange-50/80 via-blue-50/80 to-orange-50/80 dark:from-orange-900/20 dark:via-blue-900/20 dark:to-orange-900/20 rounded-2xl p-8 text-center border border-orange-200/50 dark:border-orange-800/50">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-4 border border-blue-200 dark:border-blue-800">
              <Star className="h-4 w-4 mr-2" />
              Únete a Miles de Estudiantes
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">
                Comienza tu Transformación
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Profesional Hoy
              </span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Accede a contenido premium, instructores expertos y una comunidad que te apoyará en cada paso de tu journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-orange-500/25"
              >
                Explorar Cursos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500/30 dark:border-blue-400/30 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300">
                <Play className="mr-2 h-4 w-4" />
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}