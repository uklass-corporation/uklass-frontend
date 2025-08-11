"use client";

import { useState, useMemo } from 'react';
import { Major, MajorFormData } from '../data/types';
import { mockMajors } from '../data/mock-data';
import { mockUniversities } from '../../universities/data/mock-data';

export function useMajors() {
  const [majors, setMajors] = useState<Major[]>(mockMajors);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated API calls
  const createMajor = async (formData: MajorFormData): Promise<void> => {
    setIsLoading(true);
    
    // Find university details
    const university = mockUniversities.find(u => u.id === formData.universityId);
    if (!university) {
      throw new Error('Universidad no encontrada');
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newMajor: Major = {
      id: Date.now().toString(),
      ...formData,
      universityName: university.name,
      universityCode: university.code,
      studentsEnrolled: 0, // New majors start with 0 students
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setMajors(prev => [...prev, newMajor]);
    setIsLoading(false);
  };

  const updateMajor = async (id: string, formData: MajorFormData): Promise<void> => {
    setIsLoading(true);
    
    // Find university details
    const university = mockUniversities.find(u => u.id === formData.universityId);
    if (!university) {
      throw new Error('Universidad no encontrada');
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMajors(prev => prev.map(major => 
      major.id === id 
        ? { 
            ...major, 
            ...formData, 
            universityName: university.name,
            universityCode: university.code,
            updatedAt: new Date() 
          }
        : major
    ));
    setIsLoading(false);
  };

  const deleteMajor = async (id: string): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setMajors(prev => prev.filter(major => major.id !== id));
    setIsLoading(false);
  };

  const getMajorById = (id: string): Major | undefined => {
    return majors.find(major => major.id === id);
  };

  const getMajorsByUniversityId = (universityId: string): Major[] => {
    return majors.filter(major => major.universityId === universityId);
  };

  const stats = useMemo(() => {
    const total = majors.length;
    const active = majors.filter(m => m.status === 'active').length;
    const inactive = majors.filter(m => m.status === 'inactive').length;
    const totalStudents = majors.reduce((sum, m) => sum + m.studentsEnrolled, 0);
    const averageDuration = total > 0 ? majors.reduce((sum, m) => sum + m.duration, 0) / total : 0;
    
    // By degree
    const byDegree = majors.reduce((acc, major) => {
      acc[major.degree] = (acc[major.degree] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // By university
    const byUniversity = majors.reduce((acc, major) => {
      const key = major.universityName;
      if (!acc[key]) {
        acc[key] = { count: 0, students: 0 };
      }
      acc[key].count += 1;
      acc[key].students += major.studentsEnrolled;
      return acc;
    }, {} as Record<string, { count: number; students: number }>);

    // By modality
    const byModality = majors.reduce((acc, major) => {
      acc[major.modality] = (acc[major.modality] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      active,
      inactive,
      totalStudents,
      averageDuration: Math.round(averageDuration * 10) / 10,
      byDegree,
      byUniversity,
      byModality,
    };
  }, [majors]);

  return {
    majors,
    isLoading,
    stats,
    actions: {
      createMajor,
      updateMajor,
      deleteMajor,
      getMajorById,
      getMajorsByUniversityId,
    }
  };
}
