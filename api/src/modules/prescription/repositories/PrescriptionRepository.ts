import { PrescriptionModel } from '../model/PrescriptionModel';
import PrescriptionProps from '../model/PrescriptionTypeModel';

export class PrescriptionRepository {
  public listAll(): Promise<PrescriptionProps[]> {
    return PrescriptionModel.find();
  }

  public create(prescription: PrescriptionProps) {
    return PrescriptionModel.create(prescription);
  }

  public delete(specialityId: string): Promise<unknown> {
    return PrescriptionModel.findByIdAndDelete(specialityId);
  }
}
