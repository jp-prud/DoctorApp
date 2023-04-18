import StorageClient from '@storage/StorageClient';

import {APPOINTMENT_COLLECTION} from '@storage/StorageConfig';

export interface AppointmentDTO {
  medicData: {
    name: string;
    specialiation: string;
  };
  address: string;
  date: Date;
}

class AppointmentsService {
  storageClient: StorageClient;

  constructor() {
    this.storageClient = new StorageClient(APPOINTMENT_COLLECTION);
  }

  listAppointments() {
    console.log('entrou service');

    return this.storageClient.list<AppointmentDTO>();
  }

  getAppointmentById() {}

  async createAppointment(appointmentData: AppointmentDTO) {
    const appointmentsList = await this.listAppointments();

    const storage = [...appointmentsList, appointmentData];

    return this.storageClient.store<AppointmentDTO[]>(storage);
  }

  updateAppointment() {}

  deleteAppointment() {}
}

export default new AppointmentsService();
