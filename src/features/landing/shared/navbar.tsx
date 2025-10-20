"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import ModeToggle from "@/components/themes/mode-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Acerca de" },
    { href: "/explore", label: "Explorar" },
    { href: "/universities", label: "Universidades" },
    { href: "/instructors", label: "Instructores" },
  ];

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/40 dark:border-gray-700/40 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-2.5 rounded-xl shadow-lg">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  UKLASS
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium -mt-1">
                  Educación Premium
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark/Light Mode Toggle */}
            <div className="p-1">
              <ModeToggle />
            </div>

            {/* Shopping Cart */}
            <button className="relative p-3 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-xl group">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg">
                0
              </span>
              <div className="absolute inset-0 bg-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-2">
              <Link
                href="/login"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-orange-50 dark:hover:bg-orange-900/20"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Registrarse
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="p-1">
              <ModeToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 p-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 border-t border-gray-200/40 dark:border-gray-700/40 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 mt-4 border-t border-gray-200/40 dark:border-gray-700/40">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between px-4">
                    <button className="relative p-3 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-xl">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        0
                      </span>
                    </button>
                  </div>
                  
                  <div className="flex flex-col space-y-2 px-2">
                    <Link
                      href="/login"
                      className="text-center text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      href="/register"
                      className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Registrarse
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}