import DoctorProps from '../model/DoctorTypeModel';
import { DoctorRepository } from '../repositories/DoctorRepository';

export class ListAllDoctorService {
  public async execute(): Promise<DoctorProps[]> {
    const doctorRepository = new DoctorRepository();

    const allSpecialities = await doctorRepository.listAll();

    return allSpecialities;
  }
}
