import AppError from '@shared/errors/AppError';
import PatientProps from '../model/PatientTypeModel';
import { PatientRepository } from '../repositories/PatientRepository';

export class CreatePatientService {
  public async execute(patient: PatientProps): Promise<PatientProps> {
    const patientRepository = new PatientRepository();

    const patientEmailIsAlreadyExists = await patientRepository.findByEmail(
      patient.email,
    );

    if (patientEmailIsAlreadyExists)
      throw new AppError('Patient e-mail is already exists');

    const patientCpfIsAlreadyExists = await patientRepository.findByCpf(
      patient.cpf,
    );

    if (patientCpfIsAlreadyExists)
      throw new AppError('Patient CPF is already in use');

    const newPatient = await patientRepository.create(patient);

    return newPatient;
  }
}
