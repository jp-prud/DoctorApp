import mongoose from 'mongoose';

interface PatientProps extends mongoose.Document {
  name: string;
  email: string;
  cpf: string;
  address: string;
  phone?: string;
}

export default PatientProps;
