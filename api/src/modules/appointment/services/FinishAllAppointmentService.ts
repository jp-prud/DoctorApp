import { AppointmentRepository } from '../repositories/AppointmentRepository';

export class FinishAllAppointmentService {
  public async execute() {
    const appointmentRepository = new AppointmentRepository();

    return await appointmentRepository.finishAll();
  }
}
