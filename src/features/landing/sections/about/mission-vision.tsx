"use client";

import { Target, Eye, Heart, Lightbulb } from "lucide-react";

export default function MissionVision() {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Misión",
      description: "Democratizar el acceso a la educación de calidad mundial, conectando estudiantes con los mejores instructores y universidades para crear un futuro más brillante y equitativo.",
      color: "orange"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Visión",
      description: "Ser la plataforma educativa líder global que transforme vidas a través del aprendizaje, creando una comunidad mundial de estudiantes empoderados y exitosos.",
      color: "blue"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Valores",
      description: "Excelencia académica, accesibilidad, innovación continua, diversidad e inclusión, y el compromiso inquebrantable con el éxito de nuestros estudiantes.",
      color: "orange"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Filosofía",
      description: "Creemos que cada persona tiene un potencial único que puede ser desbloqueado a través de la educación personalizada, el mentoring de calidad y una comunidad de apoyo.",
      color: "blue"
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
            <Target className="h-4 w-4 mr-2" />
            Nuestros Principios
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Lo que nos
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Define y Motiva
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nuestros valores fundamentales guían cada decisión que tomamos y cada experiencia que creamos
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-16 h-16 ${
                value.color === 'orange' 
                  ? 'bg-orange-100 dark:bg-orange-900/30' 
                  : 'bg-blue-100 dark:bg-blue-900/30'
              } rounded-xl mb-6 group-hover:scale-110 transition-all duration-300`}>
                <span className={`${
                  value.color === 'orange' 
                    ? 'text-orange-600 dark:text-orange-400' 
                    : 'text-blue-600 dark:text-blue-400'
                }`}>
                  {value.icon}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                  value.color === 'orange'
                    ? 'text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400'
                    : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                }`}>
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}