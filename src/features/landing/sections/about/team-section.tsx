"use client";

import { Linkedin, Twitter, Mail, Users } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "María González",
      role: "CEO & Fundadora",
      description: "Ex-directora de educación en Google, apasionada por democratizar el acceso a la educación de calidad.",
      expertise: ["Liderazgo", "EdTech", "Estrategia"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "maria@uklass.com"
      }
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "CTO",
      description: "Ingeniero de software con 15 años de experiencia en plataformas escalables y arquitectura de sistemas.",
      expertise: ["Desarrollo", "Arquitectura", "DevOps"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "carlos@uklass.com"
      }
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Head of Education",
      description: "Pedagoga y diseñadora instruccional con maestría en Harvard, especialista en aprendizaje personalizado.",
      expertise: ["Pedagogía", "Curriculum", "UX"],
      social: {
        linkedin: "#",
        email: "ana@uklass.com"
      }
    },
    {
      id: 4,
      name: "Luis Fernández",
      role: "VP of Growth",
      description: "Experto en growth hacking y marketing digital, ha escalado startups de 0 a 10M+ usuarios.",
      expertise: ["Marketing", "Growth", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "luis@uklass.com"
      }
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-100/60 via-transparent to-blue-100/60 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100/50 via-transparent to-orange-100/50 dark:from-blue-900/15 dark:via-transparent dark:to-orange-900/15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 font-medium mb-6 border border-orange-200 dark:border-orange-800">
            <Users className="h-4 w-4 mr-2" />
            Nuestro Equipo
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Conoce a las Mentes
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Detrás de UKLASS
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un equipo diverso y experimentado, unidos por la pasión de transformar la educación global
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {member.description}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-1 mb-4 justify-center">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-2">
                {member.social.linkedin && (
                  <Link
                    href={member.social.linkedin}
                    className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                )}
                {member.social.twitter && (
                  <Link
                    href={member.social.twitter}
                    className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                )}
                {member.social.email && (
                  <Link
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}