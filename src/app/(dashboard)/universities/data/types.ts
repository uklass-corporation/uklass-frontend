export interface University {
  id: string;
  name: string;
  code: string;
  country: string;
  city: string;
  website?: string;
  email?: string;
  phone?: string;
  status: 'active' | 'inactive';
  studentsCount: number;
  foundedYear: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UniversityFormData {
  name: string;
  code: string;
  country: string;
  city: string;
  website?: string;
  email?: string;
  phone?: string;
  status: 'active' | 'inactive';
  foundedYear: number;
}
