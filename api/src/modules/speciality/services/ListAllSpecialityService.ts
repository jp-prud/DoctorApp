import SpecialityProps from '../model/SpecialityTypeModel';
import { SpecialityRepository } from '../repositories/SpecialityRepository';

export class ListAllSpecialityService {
  public async execute(): Promise<SpecialityProps[]> {
    const specialityRepository = new SpecialityRepository();

    const allSpecialities = await specialityRepository.listAll();

    return allSpecialities;
  }
}
