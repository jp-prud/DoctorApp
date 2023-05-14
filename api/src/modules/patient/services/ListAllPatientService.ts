import PatientProps from '../model/PatientTypeModel';
import { PatientRepository } from '../repositories/PatientRepository';

export class ListAllPatientService {
  public async execute(): Promise<PatientProps[]> {
    const patientRepository = new PatientRepository();

    const allSpecialities = await patientRepository.listAll();

    return allSpecialities;
  }
}
