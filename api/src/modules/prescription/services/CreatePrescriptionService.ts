import PrescriptionProps from '../model/PrescriptionTypeModel';
import { PrescriptionRepository } from '../repositories/PrescriptionRepository';

export class CreatePrescriptionService {
  public async execute(prescription: PrescriptionProps) {
    const prescriptionRepository = new PrescriptionRepository();

    const newPrescription = await prescriptionRepository.create(prescription);

    return newPrescription;
  }
}
