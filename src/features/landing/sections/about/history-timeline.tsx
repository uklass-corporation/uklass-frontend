"use client";

import { Calendar, Rocket, Users, Award, Globe, TrendingUp } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  achievement: string;
}

export default function HistoryTimeline() {
  const timeline: TimelineEvent[] = [
    {
      year: "2020",
      title: "Fundación de UKLASS",
      description: "Iniciamos con la visión de democratizar la educación de calidad, comenzando con 5 cursos y 10 instructores.",
      icon: <Rocket className="h-5 w-5" />,
      achievement: "10 instructores fundadores"
    },
    {
      year: "2021",
      title: "Expansión Global",
      description: "Alcanzamos nuestros primeros 10,000 estudiantes y expandimos a 25 países, estableciendo alianzas estratégicas.",
      icon: <Globe className="h-5 w-5" />,
      achievement: "25 países alcanzados"
    },
    {
      year: "2022",
      title: "Plataforma Innovadora",
      description: "Lanzamos nuestra plataforma de IA para aprendizaje personalizado y conseguimos la certificación ISO de calidad.",
      icon: <Award className="h-5 w-5" />,
      achievement: "IA personalizada implementada"
    },
    {
      year: "2023",
      title: "Comunidad Masiva",
      description: "Superamos los 50,000 estudiantes activos y 500 instructores expertos de las mejores universidades mundiales.",
      icon: <Users className="h-5 w-5" />,
      achievement: "50K+ estudiantes activos"
    },
    {
      year: "2024",
      title: "Líderes del Mercado",
      description: "Nos convertimos en la plataforma educativa de más rápido crecimiento en Latinoamérica con 1,200+ cursos.",
      icon: <TrendingUp className="h-5 w-5" />,
      achievement: "Líderes en LATAM"
    },
    {
      year: "2025",
      title: "Futuro Brillante",
      description: "Continuamos innovando con realidad virtual, blockchain para certificaciones y expansión a 120+ países.",
      icon: <Calendar className="h-5 w-5" />,
      achievement: "Tecnología del futuro"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/60 via-transparent to-blue-100/60 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-100/50 via-transparent to-orange-100/50 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6 border border-blue-200 dark:border-blue-800">
            <Calendar className="h-4 w-4 mr-2" />
            Nuestra Historia
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              El Camino hacia la
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Excelencia Educativa
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Desde nuestros humildes inicios hasta convertirnos en líderes globales en educación digital
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 to-blue-600 h-full rounded-full hidden lg:block"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105">
                    {/* Year Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold mb-4">
                      {event.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Achievement */}
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium">
                      <Award className="h-3 w-3 mr-2" />
                      {event.achievement}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-2/12 justify-center relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full shadow-lg">
                    <span className="text-white">{event.icon}</span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}