"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award, Users, TrendingUp } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  course: string;
  achievement: string;
  beforeAfter: {
    before: string;
    after: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "Desarrolladora Full Stack",
    company: "TechCorp",
    content: "UKLASS transformó completamente mi carrera. En 6 meses pasé de no saber programar a conseguir mi primer trabajo como desarrolladora. Los instructores son excepcionales.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
    course: "Desarrollo Web Full Stack",
    achievement: "Conseguí trabajo en 3 meses",
    beforeAfter: {
      before: "Sin experiencia en programación",
      after: "Desarrolladora Full Stack en TechCorp"
    }
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Data Scientist",
    company: "DataLab",
    content: "La calidad del contenido es impresionante. Cada curso está perfectamente estructurado y los proyectos prácticos me dieron la confianza para cambiar de carrera.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
    course: "Data Science & Machine Learning",
    achievement: "Aumento salarial del 150%",
    beforeAfter: {
      before: "Analista junior",
      after: "Data Scientist Senior"
    }
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "UX/UI Designer",
    company: "DesignStudio",
    content: "Los cursos de diseño me ayudaron a desarrollar un portfolio increíble. La metodología práctica y el feedback personalizado fueron clave para mi éxito.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
    course: "UX/UI Design Masterclass",
    achievement: "Portfolio ganador de premios",
    beforeAfter: {
      before: "Diseñadora gráfica tradicional",
      after: "UX/UI Designer en startup unicornio"
    }
  },
  {
    id: 4,
    name: "Luis Fernández",
    role: "DevOps Engineer",
    company: "CloudTech",
    content: "La comunidad de UKLASS es increíble. Siempre hay alguien dispuesto a ayudar y los networking events me conectaron con oportunidades laborales.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
    course: "DevOps & Cloud Computing",
    achievement: "Promoción a Team Lead",
    beforeAfter: {
      before: "Desarrollador backend",
      after: "DevOps Team Lead"
    }
  }
];

const stats = [
  { label: "Satisfacción", value: "98%", icon: <Star className="h-4 w-4" />, color: "text-orange-600 dark:text-orange-400" },
  { label: "Empleabilidad", value: "95%", icon: <TrendingUp className="h-4 w-4" />, color: "text-blue-600 dark:text-blue-400" },
  { label: "Estudiantes", value: "50K+", icon: <Users className="h-4 w-4" />, color: "text-orange-600 dark:text-orange-400" },
  { label: "Certificados", value: "25K+", icon: <Award className="h-4 w-4" />, color: "text-blue-600 dark:text-blue-400" }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-100/60 via-transparent to-blue-100/60 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100/50 via-transparent to-orange-100/50 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-4 border border-blue-200 dark:border-blue-800">
            <Quote className="h-4 w-4 mr-2" />
            Testimonios Reales
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Historias de
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Transformación Real
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre cómo nuestros estudiantes han cambiado sus vidas profesionales
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className={`flex items-center justify-center w-8 h-8 ${stat.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-orange-100 dark:bg-orange-900/30'} rounded-lg mb-2 mx-auto`}>
                <span className={stat.color}>{stat.icon}</span>
              </div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Avatar & Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white fill-current" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{currentTestimonial.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{currentTestimonial.role}</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">{currentTestimonial.company}</p>
              
              <div className="mt-3 inline-flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium">
                <Award className="h-3 w-3 mr-1" />
                {currentTestimonial.achievement}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-orange-400/30 dark:text-orange-500/30" />
                <blockquote className="text-lg text-gray-900 dark:text-white leading-relaxed pl-6">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </blockquote>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mt-4 pl-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < currentTestimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  Curso: {currentTestimonial.course}
                </span>
              </div>

              {/* Before/After */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pl-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">ANTES</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{currentTestimonial.beforeAfter.before}</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                  <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">DESPUÉS</div>
                  <div className="text-sm text-gray-900 dark:text-white font-medium">{currentTestimonial.beforeAfter.after}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 w-6"
                    : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
            >
              <Play className={`h-4 w-4 ${isAutoPlaying ? 'opacity-100' : 'opacity-50'}`} />
            </button>
            
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-lg bg-white/90 dark:bg-gray-700/90 border border-gray-200/50 dark:border-gray-600/50 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-lg bg-white/90 dark:bg-gray-700/90 border border-gray-200/50 dark:border-gray-600/50 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}