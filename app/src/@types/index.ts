export interface MedicProps {
  name: string;
  description: string;
  specialization: string;
  image_url: string;
}

export interface CategoryProps {
  _id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}
