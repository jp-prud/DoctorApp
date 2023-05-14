import AppointmentProps from '../model/AppointmentTypeModel';
import { AppointmentRepository } from '../repositories/AppointmentRepository';

export class ListAllAppointmentService {
  public async execute(): Promise<AppointmentProps[]> {
    const appointmentRepository = new AppointmentRepository();

    const allSpecialities = await appointmentRepository.listAll();

    return allSpecialities;
  }
}
