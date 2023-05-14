import AppError from '@shared/errors/AppError';
import { DoctorRepository } from '../repositories/DoctorRepository';

export class DeleteDoctorService {
  public async execute(doctorId: string) {
    const doctorRepository = new DoctorRepository();

    const doctorExists = await doctorRepository.findById(doctorId);

    if (!doctorExists) throw new AppError('Doctor not found');

    return await doctorRepository.delete(doctorId);
  }
}
