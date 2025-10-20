"use client";

import { useState, useMemo } from "react";

export interface Instructor {
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
  featured?: boolean;
  verified?: boolean;
  languages?: string[];
  availability?: 'available' | 'busy' | 'unavailable';
  hourlyRate?: string;
  responseTime?: string;
}

export interface InstructorFilters {
  search: string;
  specialty: string;
  location: string;
  rating: number;
  availability: string;
  priceRange: string;
}

export function useInstructors() {
  const [filters, setFilters] = useState<InstructorFilters>({
    search: "",
    specialty: "all",
    location: "all",
    rating: 0,
    availability: "all",
    priceRange: "all"
  });

  const [sortBy, setSortBy] = useState<'rating' | 'students' | 'courses' | 'name'>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Mock data - En producción esto vendría de una API
  const instructors: Instructor[] = useMemo(() => [
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
      },
      featured: true,
      verified: true,
      languages: ["Español", "Inglés", "Portugués"],
      availability: 'available',
      hourlyRate: "$85/hr",
      responseTime: "2 horas"
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
      },
      featured: true,
      verified: true,
      languages: ["Español", "Inglés", "Portugués"],
      availability: 'available',
      hourlyRate: "$75/hr",
      responseTime: "1 hora"
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
      },
      featured: true,
      verified: true,
      languages: ["Español", "Inglés", "Catalán"],
      availability: 'busy',
      hourlyRate: "$90/hr",
      responseTime: "4 horas"
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
      },
      featured: false,
      verified: true,
      languages: ["Español", "Inglés"],
      availability: 'available',
      hourlyRate: "$65/hr",
      responseTime: "3 horas"
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
      },
      featured: false,
      verified: true,
      languages: ["Inglés", "Mandarín", "Español"],
      availability: 'available',
      hourlyRate: "$100/hr",
      responseTime: "1 hora"
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
      },
      featured: false,
      verified: true,
      languages: ["Español", "Inglés", "Portugués"],
      availability: 'busy',
      hourlyRate: "$95/hr",
      responseTime: "6 horas"
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
      },
      featured: false,
      verified: true,
      languages: ["Inglés", "Ruso", "Español"],
      availability: 'available',
      hourlyRate: "$110/hr",
      responseTime: "2 horas"
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
      },
      featured: false,
      verified: true,
      languages: ["Español", "Inglés"],
      availability: 'available',
      hourlyRate: "$70/hr",
      responseTime: "2 horas"
    }
  ], []);

  // Filtros derivados
  const specialties = useMemo(() => 
    ["all", ...Array.from(new Set(instructors.map(i => i.specialty)))], 
    [instructors]
  );

  const locations = useMemo(() => 
    ["all", ...Array.from(new Set(instructors.map(i => i.location.split(',')[1]?.trim() || i.location)))], 
    [instructors]
  );

  // Instructores filtrados
  const filteredInstructors = useMemo(() => {
    const filtered = instructors.filter(instructor => {
      const matchesSearch = 
        instructor.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        instructor.specialty.toLowerCase().includes(filters.search.toLowerCase()) ||
        instructor.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        instructor.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()));

      const matchesSpecialty = filters.specialty === "all" || instructor.specialty === filters.specialty;
      const matchesLocation = filters.location === "all" || instructor.location.includes(filters.location);
      const matchesRating = filters.rating === 0 || instructor.rating >= filters.rating;
      const matchesAvailability = filters.availability === "all" || instructor.availability === filters.availability;

      return matchesSearch && matchesSpecialty && matchesLocation && matchesRating && matchesAvailability;
    });

    // Ordenamiento
    filtered.sort((a, b) => {
      let aValue: string | number, bValue: string | number;
      
      switch (sortBy) {
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'students':
          aValue = parseInt(a.students.replace(/[^\d]/g, ''));
          bValue = parseInt(b.students.replace(/[^\d]/g, ''));
          break;
        case 'courses':
          aValue = a.courses;
          bValue = b.courses;
          break;
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        default:
          return 0;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [instructors, filters, sortBy, sortOrder]);

  // Instructores destacados
  const featuredInstructors = useMemo(() => 
    instructors.filter(instructor => instructor.featured), 
    [instructors]
  );

  // Estadísticas
  const stats = useMemo(() => ({
    total: instructors.length,
    verified: instructors.filter(i => i.verified).length,
    specialties: new Set(instructors.map(i => i.specialty)).size,
    avgRating: (instructors.reduce((sum, i) => sum + i.rating, 0) / instructors.length).toFixed(1),
    totalStudents: instructors.reduce((sum, i) => sum + parseInt(i.students.replace(/[^\d]/g, '')), 0),
    totalCourses: instructors.reduce((sum, i) => sum + i.courses, 0)
  }), [instructors]);

  // Funciones de utilidad
  const updateFilters = (newFilters: Partial<InstructorFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      specialty: "all",
      location: "all",
      rating: 0,
      availability: "all",
      priceRange: "all"
    });
  };

  const getInstructorById = (id: number) => {
    return instructors.find(instructor => instructor.id === id);
  };

  const getInstructorsBySpecialty = (specialty: string) => {
    return instructors.filter(instructor => instructor.specialty === specialty);
  };

  return {
    // Datos
    instructors: filteredInstructors,
    featuredInstructors,
    allInstructors: instructors,
    specialties,
    locations,
    stats,
    
    // Estado
    filters,
    sortBy,
    sortOrder,
    
    // Acciones
    updateFilters,
    resetFilters,
    setSortBy,
    setSortOrder,
    
    // Utilidades
    getInstructorById,
    getInstructorsBySpecialty
  };
}