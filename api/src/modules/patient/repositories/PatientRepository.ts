import { PatientModel } from '../model/PatientModel';
import PatientProps from '../model/PatientTypeModel';

export class PatientRepository {
  public listAll(): Promise<PatientProps[]> {
    return PatientModel.find();
  }

  public findById(patientId: string) {
    return PatientModel.findById(patientId);
  }

  public findByEmail(patientEmail: string) {
    return PatientModel.findOne({ email: patientEmail });
  }

  public findByCpf(patientCpf: string) {
    return PatientModel.findOne({ cpf: patientCpf });
  }

  public create(patient: PatientProps): Promise<PatientProps> {
    return PatientModel.create(patient);
  }

  public delete(specialityId: string): Promise<unknown> {
    return PatientModel.findByIdAndDelete(specialityId);
  }
}
