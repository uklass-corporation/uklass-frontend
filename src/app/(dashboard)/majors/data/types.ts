export interface Major {
  id: string;
  name: string;
  code: string;
  description?: string;
  universityId: string;
  universityName: string;
  universityCode: string;
  duration: number; // in years
  degree: 'bachelor' | 'master' | 'doctorate' | 'technical';
  modality: 'presencial' | 'virtual' | 'hibrida';
  status: 'active' | 'inactive';
  studentsEnrolled: number;
  maxCapacity?: number;
  tuitionFee?: number;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface MajorFormData {
  name: string;
  code: string;
  description?: string;
  universityId: string;
  duration: number;
  degree: 'bachelor' | 'master' | 'doctorate' | 'technical';
  modality: 'presencial' | 'virtual' | 'hibrida';
  status: 'active' | 'inactive';
  maxCapacity?: number;
  tuitionFee?: number;
  startDate?: Date;
  endDate?: Date;
}

export const degreeLabels = {
  bachelor: 'Licenciatura',
  master: 'Maestría',
  doctorate: 'Doctorado',
  technical: 'Técnico',
};

export const modalityLabels = {
  presencial: 'Presencial',
  virtual: 'Virtual',
  hibrida: 'Híbrida',
};
