export interface DoctorProps {
  name: string;
  email: string;
  crm: string;
  description: string;
  phone?: string;
  speciality: string;
}

export interface CategoryProps {
  _id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}
