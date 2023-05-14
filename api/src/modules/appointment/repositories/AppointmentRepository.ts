import { AppointmentModel } from '../model/AppointmentModel';
import AppointmentProps from '../model/AppointmentTypeModel';

export class AppointmentRepository {
  public listAll(): Promise<AppointmentProps[]> {
    return AppointmentModel.find()
      .sort({ createdAt: -1 })
      .populate(['doctor', 'patient', 'feedback', 'prescription']);
  }

  public findById(appointmentId: string) {
    return AppointmentModel.findById(appointmentId);
  }

  public create(appointment: AppointmentProps) {
    return AppointmentModel.create(appointment);
  }

  public delete(specialityId: string): Promise<unknown> {
    return AppointmentModel.findByIdAndDelete(specialityId);
  }
}
