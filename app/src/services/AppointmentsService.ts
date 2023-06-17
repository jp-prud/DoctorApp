import StorageClient from '@storage/StorageClient';

import {APPOINTMENT_COLLECTION} from '@storage/StorageConfig';
import HttpClient from './utils/HttpClient';

export type Status =
  | 'Aguardando'
  | 'Marcado'
  | 'Em_Atendimento'
  | 'Aguardando_Pagamento'
  | 'Finalizado';

export interface AppointmentDTO {
  _id: string;
  patient: {
    name: string;
  };
  doctor: {
    name: string;
  };
  status: Status;
  description: string;
  appointmentTime: string;
  address: string;
}

class AppointmentsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(
      'https://api-production-160a.up.railway.app',
    );
  }

  async listAll() {
    return this.httpClient.get<AppointmentDTO[]>('/appointments');
  }

  getAppointmentById() {}

  async createAppointment(appointmentData: AppointmentDTO) {
    // const appointmentsList = await this.listAppointments();
    // const storage = [...appointmentsList, appointmentData];
    // return this.storageClient.store<AppointmentDTO[]>(storage);
  }

  updateAppointment() {}

  deleteAppointment() {}
}

export default new AppointmentsService();
