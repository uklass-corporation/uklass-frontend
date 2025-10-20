"use client";

import { useState } from "react";
import { Star, Users, BookOpen, Search, Filter, MapPin, Award, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Instructor {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  specialty: string;
  experience: string;
  students: string;
  courses: number;
  rating: number;
  description: string;
  skills: string[];
  achievements: string[];
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export default function InstructorsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState<string>("all");
  const [filterLocation, setFilterLocation] = useState<string>("all");

  const instructors: Instructor[] = [
    {
      id: 1,
      name: "Dr. María González",
      title: "Senior Data Scientist",
      company: "Google",
      location: "Lima, Perú",
      specialty: "Data Science",
      experience: "12 años",
      students: "15K+",
      courses: 8,
      rating: 4.9,
      description: "Especialista en Machine Learning e Inteligencia Artificial con más de una década de experiencia en Google. PhD en Computer Science por Stanford.",
      skills: ["Python", "Machine Learning", "TensorFlow", "BigQuery", "Statistics"],
      achievements: ["Top 1% instructor", "Google AI Expert", "Published researcher"],
      image: "bg-gradient-to-br from-purple-500/20 to-pink-600/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "maria@uklass.com"
      }
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      title: "Lead Software Engineer",
      company: "Microsoft",
      location: "São Paulo, Brasil",
      specialty: "Desarrollo Web",
      experience: "10 años",
      students: "12K+",
      courses: 12,
      rating: 4.8,
      description: "Arquitecto de software especializado en tecnologías web modernas. Líder técnico en Microsoft Azure con certificaciones avanzadas.",
      skills: ["React", "Node.js", "TypeScript", "Azure", "DevOps"],
      achievements: ["Microsoft MVP", "Azure Solutions Architect", "Open Source Contributor"],
      image: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "carlos@uklass.com"
      }
    },
    {
      id: 3,
      name: "Ana Martínez",
      title: "UX Design Director",
      company: "Airbnb",
      location: "Barcelona, España",
      specialty: "UX/UI Design",
      experience: "8 años",
      students: "8K+",
      courses: 6,
      rating: 4.9,
      description: "Directora de UX en Airbnb con experiencia previa en Apple y Spotify. Especialista en design systems y user research.",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Design Thinking"],
      achievements: ["Design Excellence Award", "UX Mentor of the Year", "TEDx Speaker"],
      image: "bg-gradient-to-br from-pink-500/20 to-rose-600/20",
      social: {
        linkedin: "#",
        email: "ana@uklass.com"
      }
    },
    {
      id: 4,
      name: "Luis Fernández",
      title: "Growth Marketing Manager",
      company: "Uber",
      location: "Ciudad de México, México",
      specialty: "Marketing Digital",
      experience: "9 años",
      students: "20K+",
      courses: 10,
      rating: 4.7,
      description: "Experto en growth hacking y marketing performance. Ha escalado productos de 0 a millones de usuarios en Uber y startups unicornio.",
      skills: ["Growth Hacking", "Performance Marketing", "Analytics", "A/B Testing", "SEO/SEM"],
      achievements: ["Growth Expert Certification", "Marketing Innovation Award", "Startup Advisor"],
      image: "bg-gradient-to-br from-green-500/20 to-teal-600/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "luis@uklass.com"
      }
    },
    {
      id: 5,
      name: "Sofía Chen",
      title: "Blockchain Developer",
      company: "Ethereum Foundation",
      location: "Singapur",
      specialty: "Blockchain",
      experience: "6 años",
      students: "5K+",
      courses: 4,
      rating: 4.8,
      description: "Desarrolladora core de Ethereum con expertise en smart contracts y DeFi. Pionera en el desarrollo de protocolos descentralizados.",
      skills: ["Solidity", "Web3", "Smart Contracts", "DeFi", "Ethereum"],
      achievements: ["Ethereum Core Developer", "DeFi Pioneer Award", "Blockchain Researcher"],
      image: "bg-gradient-to-br from-yellow-500/20 to-orange-600/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sofia@uklass.com"
      }
    },
    {
      id: 6,
      name: "Roberto Silva",
      title: "DevOps Architect",
      company: "Amazon Web Services",
      location: "Seattle, USA",
      specialty: "DevOps",
      experience: "11 años",
      students: "10K+",
      courses: 7,
      rating: 4.6,
      description: "Arquitecto de infraestructura cloud en AWS. Especialista en automatización, contenedores y arquitecturas de microservicios.",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      achievements: ["AWS Certified Solutions Architect", "Container Expert", "Cloud Innovation Award"],
      image: "bg-gradient-to-br from-indigo-500/20 to-purple-600/20",
      social: {
        linkedin: "#",
        email: "roberto@uklass.com"
      }
    },
    {
      id: 7,
      name: "Elena Popov",
      title: "Cybersecurity Specialist",
      company: "CrowdStrike",
      location: "Londres, Reino Unido",
      specialty: "Ciberseguridad",
      experience: "7 años",
      students: "6K+",
      courses: 5,
      rating: 4.9,
      description: "Especialista en threat hunting y incident response. CISSP certificada con experiencia en Fortune 500 companies.",
      skills: ["Ethical Hacking", "Incident Response", "Security Analysis", "Penetration Testing", "Risk Assessment"],
      achievements: ["CISSP Certified", "Security Expert of the Year", "Cybersecurity Researcher"],
      image: "bg-gradient-to-br from-red-500/20 to-pink-600/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "elena@uklass.com"
      }
    },
    {
      id: 8,
      name: "Diego Morales",
      title: "Mobile App Developer",
      company: "WhatsApp",
      location: "Buenos Aires, Argentina",
      specialty: "Desarrollo Mobile",
      experience: "8 años",
      students: "9K+",
      courses: 9,
      rating: 4.7,
      description: "Senior iOS developer en WhatsApp. Experto en desarrollo nativo y cross-platform con React Native y Flutter.",
      skills: ["iOS", "React Native", "Flutter", "Swift", "Mobile Architecture"],
      achievements: ["iOS Expert Certification", "Mobile Innovation Award", "App Store Featured Developer"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "diego@uklass.com"
      }
    }
  ];

  const specialties = ["all", ...Array.from(new Set(instructors.map(i => i.specialty)))];
  const locations = ["all", ...Array.from(new Set(instructors.map(i => i.location.split(',')[1]?.trim() || i.location)))];

  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = filterSpecialty === "all" || instructor.specialty === filterSpecialty;
    const matchesLocation = filterLocation === "all" || instructor.location.includes(filterLocation);
    
    return matchesSearch && matchesSpecialty && matchesLocation;
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
            <Users className="h-4 w-4 mr-2" />
            Directorio de Expertos
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Encuentra al Instructor
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Perfecto para Ti
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explora perfiles de instructores expertos en diversas especialidades
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar instructores..."
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
            
            {/* Specialty Filter */}
            <select
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty === "all" ? "Todas las especialidades" : specialty}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location === "all" ? "Todas las ubicaciones" : location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredInstructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              {/* Instructor Image/Background */}
              <div className={`h-32 ${instructor.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-gray-800/80 to-transparent"></div>
                
                {/* Rating */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center space-x-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-gray-900 dark:text-white">{instructor.rating}</span>
                  </div>
                </div>

                {/* Avatar */}
                <div className="absolute bottom-3 left-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Name & Title */}
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {instructor.name}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {instructor.title}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {instructor.company}
                  </p>
                </div>

                {/* Location & Experience */}
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{instructor.location.split(',')[0]}</span>
                  </div>
                  <span>{instructor.experience} exp.</span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                  {instructor.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{instructor.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{instructor.courses} cursos</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {instructor.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {instructor.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium">
                      +{instructor.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Achievements */}
                <div className="pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-1 mb-2">
                    <Award className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                    <span className="text-xs font-medium text-gray-900 dark:text-white">Logros destacados:</span>
                  </div>
                  <div className="space-y-1">
                    {instructor.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="text-xs text-gray-600 dark:text-gray-400">
                        • {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links & Contact */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-2">
                    {instructor.social.linkedin && (
                      <Link
                        href={instructor.social.linkedin}
                        className="p-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                      >
                        <Linkedin className="h-3 w-3" />
                      </Link>
                    )}
                    {instructor.social.twitter && (
                      <Link
                        href={instructor.social.twitter}
                        className="p-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                      >
                        <Twitter className="h-3 w-3" />
                      </Link>
                    )}
                    {instructor.social.email && (
                      <Link
                        href={`mailto:${instructor.social.email}`}
                        className="p-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-md hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors duration-300"
                      >
                        <Mail className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                  
                  <button className="text-xs text-orange-600 dark:text-orange-400 font-medium hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300 flex items-center space-x-1">
                    <span>Ver perfil</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredInstructors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No se encontraron instructores
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