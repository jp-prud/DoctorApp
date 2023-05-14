import AppError from '@shared/errors/AppError';
import SpecialityProps from '../model/SpecialityTypeModel';
import { SpecialityRepository } from '../repositories/SpecialityRepository';

export class CreateSpecialityService {
  public async execute(speciality: SpecialityProps): Promise<SpecialityProps> {
    const specialityRepository = new SpecialityRepository();

    const specialityIsAlreadyExists = await specialityRepository.findByName(
      speciality.name,
    );

    if (specialityIsAlreadyExists)
      throw new AppError('Speciality with this name is already exists');


    const newSpeciality = await specialityRepository.create(speciality);

    return newSpeciality;
  }
}
