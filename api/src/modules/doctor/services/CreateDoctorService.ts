import AppError from '@shared/errors/AppError';
import DoctorProps from '../model/DoctorTypeModel';
import { DoctorRepository } from '../repositories/DoctorRepository';

export class CreateDoctorService {
  public async execute(doctor: DoctorProps): Promise<DoctorProps> {
    const doctorRepository = new DoctorRepository();

    const doctorEmailIsAlreadyExists = await doctorRepository.findByEmail(
      doctor.name,
    );

    if (doctorEmailIsAlreadyExists)
      throw new AppError('Doctor with this email is already exists');

    const doctorCrmIsAlreadyExists = await doctorRepository.findByCrm(
      doctor.crm,
    );

    if (doctorCrmIsAlreadyExists)
      throw new AppError('Doctor with this CRM is already in use');

    const newDoctor = await doctorRepository.create(doctor);

    return newDoctor;
  }
}
