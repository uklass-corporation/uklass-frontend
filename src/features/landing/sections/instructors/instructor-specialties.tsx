"use client";

import { useState } from "react";
import { Code, Palette, BarChart3, Shield, Smartphone, Cloud, Coins, Lightbulb, ArrowRight, Users, Star, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";

interface Specialty {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
  instructors: number;
  courses: number;
  avgRating: number;
  color: string;
  bgColor: string;
  gradient: string;
  featured: boolean;
  growth: string;
  skills: string[];
}

export default function InstructorSpecialties() {
  const [hoveredSpecialty, setHoveredSpecialty] = useState<number | null>(null);

  const specialties: Specialty[] = [
    {
      id: 1,
      name: "Desarrollo Web",
      description: "Aprende tecnologías modernas de frontend y backend con expertos de Meta, Google y Microsoft.",
      icon: Code,
      instructors: 45,
      courses: 120,
      avgRating: 4.8,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      gradient: "from-blue-500 to-cyan-600",
      featured: true,
      growth: "+25%",
      skills: ["React", "Node.js", "TypeScript", "Next.js", "Python"]
    },
    {
      id: 2,
      name: "Data Science",
      description: "Domina machine learning, análisis de datos e IA con científicos de datos de empresas líderes.",
      icon: BarChart3,
      instructors: 32,
      courses: 85,
      avgRating: 4.9,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      gradient: "from-purple-500 to-pink-600",
      featured: true,
      growth: "+40%",
      skills: ["Python", "TensorFlow", "Machine Learning", "Statistics", "SQL"]
    },
    {
      id: 3,
      name: "UX/UI Design",
      description: "Crea experiencias digitales excepcionales con diseñadores de Apple, Airbnb y Spotify.",
      icon: Palette,
      instructors: 28,
      courses: 65,
      avgRating: 4.7,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-100 dark:bg-pink-900/30",
      gradient: "from-pink-500 to-rose-600",
      featured: true,
      growth: "+18%",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Design Thinking"]
    },
    {
      id: 4,
      name: "Marketing Digital",
      description: "Estrategias de growth hacking y marketing performance con expertos de Uber y Netflix.",
      icon: TrendingUp,
      instructors: 38,
      courses: 95,
      avgRating: 4.6,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      gradient: "from-green-500 to-teal-600",
      featured: false,
      growth: "+22%",
      skills: ["Growth Hacking", "Performance Marketing", "Analytics", "SEO/SEM", "A/B Testing"]
    },
    {
      id: 5,
      name: "Ciberseguridad",
      description: "Protege sistemas y datos con especialistas en seguridad de CrowdStrike y Palo Alto.",
      icon: Shield,
      instructors: 24,
      courses: 48,
      avgRating: 4.8,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/30",
      gradient: "from-red-500 to-pink-600",
      featured: false,
      growth: "+35%",
      skills: ["Ethical Hacking", "Incident Response", "Security Analysis", "Penetration Testing", "Risk Assessment"]
    },
    {
      id: 6,
      name: "Desarrollo Mobile",
      description: "Construye apps nativas y cross-platform con desarrolladores de WhatsApp y Instagram.",
      icon: Smartphone,
      instructors: 26,
      courses: 72,
      avgRating: 4.7,
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
      gradient: "from-cyan-500 to-blue-600",
      featured: false,
      growth: "+28%",
      skills: ["iOS", "React Native", "Flutter", "Swift", "Mobile Architecture"]
    },
    {
      id: 7,
      name: "DevOps & Cloud",
      description: "Automatiza infraestructura y deployments con ingenieros de AWS, Azure y Google Cloud.",
      icon: Cloud,
      instructors: 22,
      courses: 58,
      avgRating: 4.6,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      gradient: "from-indigo-500 to-purple-600",
      featured: false,
      growth: "+30%",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      id: 8,
      name: "Blockchain & Web3",
      description: "Desarrolla el futuro descentralizado con core developers de Ethereum y Polygon.",
      icon: Coins,
      instructors: 18,
      courses: 35,
      avgRating: 4.8,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
      gradient: "from-yellow-500 to-orange-600",
      featured: false,
      growth: "+50%",
      skills: ["Solidity", "Web3", "Smart Contracts", "DeFi", "Ethereum"]
    }
  ];

  const featuredSpecialties = specialties.filter(s => s.featured);
  const otherSpecialties = specialties.filter(s => !s.featured);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-900/30 dark:to-orange-800/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-900/30 dark:to-blue-800/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-900/30 dark:to-purple-800/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 font-medium mb-6 border border-orange-200 dark:border-orange-800">
            <Lightbulb className="h-4 w-4 mr-2" />
            Especialidades Técnicas
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Especialidades que
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Transforman Carreras
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explora las áreas de expertise más demandadas del mercado, enseñadas por profesionales de las mejores empresas tecnológicas del mundo
          </p>
        </div>

        {/* Featured Specialties */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Especialidades Más Populares
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSpecialties.map((specialty) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={specialty.id}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setHoveredSpecialty(specialty.id)}
                  onMouseLeave={() => setHoveredSpecialty(null)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 ${specialty.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${specialty.color}`} />
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-sm text-green-600 dark:text-green-400 font-bold">
                        <TrendingUp className="h-3 w-3" />
                        <span>{specialty.growth}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        {specialty.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {specialty.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{specialty.instructors}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Instructores</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <BookOpen className="h-4 w-4 text-gray-400 mr-1" />
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{specialty.courses}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Cursos</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{specialty.avgRating}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Rating</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Habilidades principales:</div>
                      <div className="flex flex-wrap gap-1">
                        {specialty.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs rounded-md font-medium ${specialty.bgColor} ${specialty.color}`}
                          >
                            {skill}
                          </span>
                        ))}
                        {specialty.skills.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-md font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                            +{specialty.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Link
                        href={`/instructors?specialty=${encodeURIComponent(specialty.name)}`}
                        className={`inline-flex items-center space-x-2 text-sm font-medium ${specialty.color} hover:underline transition-colors duration-300`}
                      >
                        <span>Ver instructores</span>
                        <ArrowRight className={`h-4 w-4 transform transition-transform duration-300 ${hoveredSpecialty === specialty.id ? 'translate-x-1' : ''}`} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Specialties */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Más Especialidades
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {otherSpecialties.map((specialty) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={specialty.id}
                  className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setHoveredSpecialty(specialty.id)}
                  onMouseLeave={() => setHoveredSpecialty(null)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 ${specialty.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-5 w-5 ${specialty.color}`} />
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400 font-bold">
                        <TrendingUp className="h-3 w-3" />
                        <span>{specialty.growth}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        {specialty.name}
                      </h4>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{specialty.instructors}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-3 w-3" />
                        <span>{specialty.courses}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{specialty.avgRating}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <Link
                        href={`/instructors?specialty=${encodeURIComponent(specialty.name)}`}
                        className={`inline-flex items-center space-x-1 text-xs font-medium ${specialty.color} hover:underline transition-colors duration-300`}
                      >
                        <span>Ver más</span>
                        <ArrowRight className={`h-3 w-3 transform transition-transform duration-300 ${hoveredSpecialty === specialty.id ? 'translate-x-1' : ''}`} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿No encuentras tu especialidad?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contamos con instructores expertos en muchas más áreas tecnológicas
            </p>
            <Link
              href="/instructors"
              className="inline-flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              <span>Explorar todos los instructores</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}