import mongoose from 'mongoose';

type Status =
  | 'Aguardando'
  | 'Em_Atendimento'
  | 'Aguardando_Pagamento'
  | 'Finalizado';

interface AppointmentProps extends mongoose.Document {
  patient: string;
  doctor: string;
  status: Status;
  feedback?: string;
  prescription?: string;
}

export default AppointmentProps;
