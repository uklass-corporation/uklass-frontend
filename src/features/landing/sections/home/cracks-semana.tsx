"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, Users, TrendingUp, Play, BookOpen } from "lucide-react";
import Link from "next/link";

interface Crack {
  id: number;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  students: string;
  rating: number;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  level: string;
  description: string;
  tags: string[];
}

const cracks: Crack[] = [
  {
    id: 1,
    title: "Desarrollo Full Stack con React y Node.js",
    instructor: "Carlos Mendoza",
    category: "Desarrollo Web",
    duration: "12 horas",
    students: "2,847",
    rating: 4.9,
    price: "$29.99",
    originalPrice: "$199.99",
    discount: "85%",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-600/20",
    level: "Intermedio",
    description: "Domina el stack completo con las tecnologías más demandadas del mercado",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 2,
    title: "Machine Learning con Python desde Cero",
    instructor: "Ana García",
    category: "Inteligencia Artificial",
    duration: "15 horas",
    students: "1,923",
    rating: 4.8,
    price: "$24.99",
    originalPrice: "$149.99",
    discount: "83%",
    image: "bg-gradient-to-br from-green-500/20 to-teal-600/20",
    level: "Principiante",
    description: "Aprende ML desde los fundamentos hasta proyectos reales",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Pandas"]
  },
  {
    id: 3,
    title: "Diseño UX/UI Profesional con Figma",
    instructor: "María López",
    category: "Diseño",
    duration: "10 horas",
    students: "3,156",
    rating: 4.9,
    price: "$19.99",
    originalPrice: "$129.99",
    discount: "85%",
    image: "bg-gradient-to-br from-pink-500/20 to-rose-600/20",
    level: "Intermedio",
    description: "Crea interfaces excepcionales que conviertan usuarios en clientes",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"]
  },
  {
    id: 4,
    title: "Marketing Digital y Growth Hacking",
    instructor: "Roberto Silva",
    category: "Marketing",
    duration: "8 horas",
    students: "2,234",
    rating: 4.7,
    price: "$22.99",
    originalPrice: "$159.99",
    discount: "86%",
    image: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
    level: "Principiante",
    description: "Estrategias probadas para hacer crecer tu negocio exponencialmente",
    tags: ["SEO", "SEM", "Social Media", "Analytics"]
  }
];

export default function CracksSemana() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, cracks.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, cracks.length - 2)) % Math.max(1, cracks.length - 2));
  };

  const visibleCracks = cracks.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-100/60 via-transparent to-blue-100/60 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100/50 via-transparent to-orange-100/50 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 font-medium mb-4 border border-orange-200 dark:border-orange-800">
            <TrendingUp className="h-4 w-4 mr-2" />
            Ofertas Limitadas
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Cracks de la
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Semana
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cursos premium con descuentos increíbles. Solo por tiempo limitado.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
            {visibleCracks.map((crack) => (
              <div
                key={crack.id}
                className="group relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredCard(crack.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    -{crack.discount} OFF
                  </div>
                </div>

                {/* Course Image/Background */}
                <div className={`h-40 ${crack.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-gray-700/80 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === crack.id ? "opacity-100" : "opacity-0"
                  }`}>
                    <button className="p-3 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-110 transition-all duration-300">
                      <Play className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </button>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-lg font-medium">
                      {crack.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Category */}
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
                    {crack.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {crack.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                    {crack.description}
                  </p>

                  {/* Instructor */}
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">
                        {crack.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">{crack.instructor}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{crack.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{crack.students}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{crack.rating}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {crack.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200/50 dark:border-gray-600/50">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-orange-600 dark:text-orange-400">{crack.price}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 line-through">{crack.originalPrice}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/course/${crack.id}`}
                      className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105"
                    >
                      Ver Curso
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/explore"
            className="inline-flex items-center px-6 py-3 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:scale-105"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Ver Todos los Cursos
          </Link>
        </div>
      </div>
    </section>
  );
}