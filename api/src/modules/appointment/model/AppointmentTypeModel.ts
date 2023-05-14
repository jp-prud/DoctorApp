import mongoose from 'mongoose';

interface AppointmentProps extends mongoose.Document {
  patient: string;
  doctor: string;
  status: string;
  feedback?: string;
  prescription: string;
}

export default AppointmentProps;
