import mongoose from 'mongoose';

type Status =
  | 'Aguardando'
  | 'Marcado'
  | 'Em_Atendimento'
  | 'Aguardando_Pagamento'
  | 'Finalizado';

interface AppointmentProps extends mongoose.Document {
  patient: string;
  doctor: string;
  status: Status;
  feedback?: string;
  prescription?: string;
  appointmentTime: Date;
  address: string;
}

export default AppointmentProps;
