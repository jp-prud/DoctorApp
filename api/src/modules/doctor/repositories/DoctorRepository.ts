import { DoctorModel } from '../model/DoctorModel';
import DoctorProps from '../model/DoctorTypeModel';

export class DoctorRepository {
  public listAll(): Promise<DoctorProps[]> {
    return DoctorModel.find().populate('speciality');
  }

  public findById(doctorId: string) {
    return DoctorModel.findById(doctorId);
  }

  public findByEmail(doctorEmail: string) {
    return DoctorModel.findOne({ name: doctorEmail });
  }

  public findByCrm(doctorCrm: string) {
    return DoctorModel.findOne({ crm: doctorCrm });
  }

  public create(doctor: DoctorProps): Promise<DoctorProps> {
    return DoctorModel.create(doctor);
  }

  public delete(specialityId: string): Promise<unknown> {
    return DoctorModel.findByIdAndDelete(specialityId);
  }
}
