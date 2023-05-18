import { AppointmentModel } from '../model/AppointmentModel';
import AppointmentProps from '../model/AppointmentTypeModel';

export class AppointmentRepository {
  public listAll(): Promise<AppointmentProps[]> {
    return AppointmentModel.find({}, [
      'doctor',
      'patient',
      'status',
      'appointmentTime',
    ])
      .sort({ createdAt: -1 })
      .populate({
        path: 'doctor',
        select: 'name',
      })
      .populate({
        path: 'patient',
        select: 'name',
      });
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
