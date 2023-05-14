import AppointmentProps from '../model/AppointmentTypeModel';
import { AppointmentRepository } from '../repositories/AppointmentRepository';

export class CreateAppointmentService {
  public async execute(appointment: AppointmentProps) {
    const appointmentRepository = new AppointmentRepository();

    const newAppointment = await appointmentRepository.create(appointment);

    return newAppointment;
  }
}
