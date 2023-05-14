import { PrescriptionRepository } from '../repositories/PrescriptionRepository';

export class DeletePrescriptionService {
  public async execute(prescriptionId: string) {
    const prescriptionRepository = new PrescriptionRepository();

    return await prescriptionRepository.delete(prescriptionId);
  }
}
