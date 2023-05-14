import AppError from '@shared/errors/AppError';
import { SpecialityRepository } from '../repositories/SpecialityRepository';

export class DeleteSpecialityService {
  public async execute(specialityId: string) {
    const specialityRepository = new SpecialityRepository();

    const specialityExists = await specialityRepository.find(specialityId);

    if (!specialityExists) throw new AppError('Speciality not found');

    return await specialityRepository.delete(specialityId);
  }
}
