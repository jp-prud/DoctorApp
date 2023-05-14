import AppError from '@shared/errors/AppError';
import { AppointmentRepository } from '../repositories/AppointmentRepository';

export class DeleteAppointmentService {
  public async execute(appointmentId: string) {
    const appointmentRepository = new AppointmentRepository();

    const appointmentExists = await appointmentRepository.findById(
      appointmentId,
    );

    if (!appointmentExists) throw new AppError('Appointment not found');

    return await appointmentRepository.delete(appointmentId);
  }
}
