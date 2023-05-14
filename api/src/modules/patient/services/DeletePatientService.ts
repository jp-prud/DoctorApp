import AppError from '@shared/errors/AppError';
import { PatientRepository } from '../repositories/PatientRepository';

export class DeletePatientService {
  public async execute(patientId: string) {
    const patientRepository = new PatientRepository();

    const patientExists = await patientRepository.findById(patientId);

    if (!patientExists) throw new AppError('Patient not found');

    return await patientRepository.delete(patientId);
  }
}
