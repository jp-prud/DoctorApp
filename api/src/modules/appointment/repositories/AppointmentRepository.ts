import { AppointmentModel } from '../model/AppointmentModel';
import AppointmentProps from '../model/AppointmentTypeModel';

export class AppointmentRepository {
  public listAll(): Promise<AppointmentProps[]> {
    return AppointmentModel.find({}, [
      'doctor',
      'patient',
      'status',
      'appointmentTime',
      'description',
      'address',
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

  public updateStatus(appointmentId: string, status: string) {
    return AppointmentModel.findByIdAndUpdate(appointmentId, {
      $set: {
        status: status,
      },
    });
  }

  public finishAll() {
    return AppointmentModel.updateMany(
      { status: { $ne: 'Finalizado' } },
      { $set: { status: 'Finalizado' } },
    );
  }

  public delete(specialityId: string): Promise<unknown> {
    return AppointmentModel.findByIdAndDelete(specialityId);
  }
}
