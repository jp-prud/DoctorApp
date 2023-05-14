import PrescriptionProps from '../model/PrescriptionTypeModel';
import { PrescriptionRepository } from '../repositories/PrescriptionRepository';

export class ListAllPrescriptionService {
  public async execute(): Promise<PrescriptionProps[]> {
    const prescriptionRepository = new PrescriptionRepository();

    const allSpecialities = await prescriptionRepository.listAll();

    return allSpecialities;
  }
}
