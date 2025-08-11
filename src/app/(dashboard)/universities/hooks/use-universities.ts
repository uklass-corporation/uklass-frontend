"use client";

import { useState, useMemo } from 'react';
import { University, UniversityFormData } from '../data/types';
import { mockUniversities } from '../data/mock-data';

export function useUniversities() {
  const [universities, setUniversities] = useState<University[]>(mockUniversities);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated API calls
  const createUniversity = async (formData: UniversityFormData): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUniversity: University = {
      id: Date.now().toString(),
      ...formData,
      studentsCount: 0, // New universities start with 0 students
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setUniversities(prev => [...prev, newUniversity]);
    setIsLoading(false);
  };

  const updateUniversity = async (id: string, formData: UniversityFormData): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUniversities(prev => prev.map(university => 
      university.id === id 
        ? { ...university, ...formData, updatedAt: new Date() }
        : university
    ));
    setIsLoading(false);
  };

  const deleteUniversity = async (id: string): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setUniversities(prev => prev.filter(university => university.id !== id));
    setIsLoading(false);
  };

  const getUniversityById = (id: string): University | undefined => {
    return universities.find(university => university.id === id);
  };

  const stats = useMemo(() => ({
    total: universities.length,
    active: universities.filter(u => u.status === 'active').length,
    inactive: universities.filter(u => u.status === 'inactive').length,
    totalStudents: universities.reduce((sum, u) => sum + u.studentsCount, 0),
  }), [universities]);

  return {
    universities,
    isLoading,
    stats,
    actions: {
      createUniversity,
      updateUniversity,
      deleteUniversity,
      getUniversityById,
    }
  };
}
