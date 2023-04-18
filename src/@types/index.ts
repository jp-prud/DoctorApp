export interface MedicProps {
  name: string;
  description: string;
  specialization: string;
  image_url: string;
}

export interface CategoryProps {
  title: string;
  icon: string;
  isSelected?: boolean;
}
