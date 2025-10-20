import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "Acerca de Nosotros" },
      { href: "/careers", label: "Carreras" },
      { href: "/contact", label: "Contacto" },
      { href: "/blog", label: "Blog" },
    ],
    education: [
      { href: "/explore", label: "Explorar Cursos" },
      { href: "/universities", label: "Universidades" },
      { href: "/instructors", label: "Instructores" },
      { href: "/certifications", label: "Certificaciones" },
    ],
    support: [
      { href: "/help", label: "Centro de Ayuda" },
      { href: "/faq", label: "Preguntas Frecuentes" },
      { href: "/terms", label: "Términos de Servicio" },
      { href: "/privacy", label: "Política de Privacidad" },
    ],
  };

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-sm"></div>
                  <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    UKLASS
                  </span>
                  <span className="text-sm text-gray-400 font-medium -mt-1">
                    Educación Premium
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                Tu plataforma educativa de confianza. Conectamos estudiantes con los mejores instructores y universidades para una experiencia de aprendizaje excepcional que transforma vidas.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
                  <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">info@uklass.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
                  <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
                  <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">Av. Educación 123, Ciudad de México</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg relative">
                Empresa
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education Links */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg relative">
                Educación
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.education.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg relative">
                Soporte
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400 font-medium">
              © {currentYear} UKLASS. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400 font-medium mr-4">Síguenos:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="p-2.5 bg-orange-500/10 hover:bg-orange-500/20 text-gray-300 hover:text-orange-400 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}