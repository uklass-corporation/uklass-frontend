"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Star, Users, BookOpen, Award } from "lucide-react";
import Link from "next/link";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  stats: {
    students: string;
    courses: string;
    rating: string;
  };
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Transforma tu Futuro",
    subtitle: "con Educación de Clase Mundial",
    description: "Accede a los mejores cursos y instructores especializados. Aprende a tu ritmo con contenido premium diseñado para profesionales.",
    ctaText: "Explorar Cursos",
    ctaLink: "/explore",
    backgroundImage: "bg-gradient-to-br from-orange-500/10 via-blue-500/5 to-orange-400/10 dark:from-orange-500/20 dark:via-blue-500/10 dark:to-orange-400/15",
    stats: {
      students: "50K+",
      courses: "1,200+",
      rating: "4.9"
    }
  },
  {
    id: 2,
    title: "Instructores Expertos",
    subtitle: "te Guían al Éxito",
    description: "Conecta con profesionales de la industria que han transformado miles de carreras. Mentoría personalizada y experiencia real.",
    ctaText: "Conocer Instructores",
    ctaLink: "/instructors",
    backgroundImage: "bg-gradient-to-br from-blue-500/10 via-orange-400/5 to-blue-400/10 dark:from-blue-500/20 dark:via-orange-400/10 dark:to-blue-400/15",
    stats: {
      students: "95%",
      courses: "500+",
      rating: "4.8"
    }
  },
  {
    id: 3,
    title: "Certificaciones",
    subtitle: "Reconocidas Mundialmente",
    description: "Obtén certificaciones que impulsen tu carrera profesional. Avaladas por las mejores universidades y empresas del mundo.",
    ctaText: "Ver Certificaciones",
    ctaLink: "/certifications",
    backgroundImage: "bg-gradient-to-br from-orange-400/10 via-blue-400/5 to-orange-500/10 dark:from-orange-400/20 dark:via-blue-400/10 dark:to-orange-500/15",
    stats: {
      students: "98%",
      courses: "200+",
      rating: "5.0"
    }
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white dark:bg-gray-900 pt-60">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/50 via-transparent to-blue-100/50 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-100/40 via-transparent to-orange-100/40 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Slide Background */}
            <div className={`absolute inset-0 ${slide.backgroundImage}`}></div>
            
            {/* Slide Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex items-center h-full py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                  {/* Text Content */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 font-medium border border-orange-200 dark:border-orange-800">
                        <Star className="h-4 w-4 mr-2" />
                        Educación Premium
                      </div>
                      
                      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        <span className="text-gray-900 dark:text-white">
                          {slide.title}
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                          {slide.subtitle}
                        </span>
                      </h1>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                        {slide.description}
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={slide.ctaLink}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-orange-500/25"
                      >
                        {slide.ctaText}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                      
                      <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500/30 dark:border-blue-400/30 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300">
                        <Play className="mr-2 h-4 w-4" />
                        Ver Demo
                      </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-2 mx-auto">
                          <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{slide.stats.students}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Estudiantes</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-2 mx-auto">
                          <BookOpen className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{slide.stats.courses}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Cursos</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 rounded-xl mb-2 mx-auto">
                          <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{slide.stats.rating}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="hidden lg:block">
                    <div className="relative">
                      {/* Floating Cards */}
                      <div className="relative z-10 space-y-4">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Cursos Interactivos</h3>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Aprende haciendo</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ml-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                              <Users className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Comunidad Global</h3>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Conecta y aprende</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                              <Award className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Certificaciones</h3>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Reconocimiento oficial</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Background Decorations */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-400/20 dark:bg-orange-500/30 rounded-full blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-24 right-6 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isAutoPlaying
              ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
              : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
          }`}
        >
          <Play className={`h-3 w-3 ${isAutoPlaying ? "animate-pulse" : ""}`} />
        </button>
      </div>
    </section>
  );
}