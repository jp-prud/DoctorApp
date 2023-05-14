import mongoose from 'mongoose';

interface DoctorProps extends mongoose.Document {
  name: string;
  email: string;
  crm: string;
  phone?: string;
  speciality: any;
}

export default DoctorProps;
