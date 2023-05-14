import { SpecialityModel } from '../model/SpecialityModel';
import SpecialityProps from '../model/SpecialityTypeModel';

export class SpecialityRepository {
  public listAll(): Promise<SpecialityProps[]> {
    return SpecialityModel.find();
  }

  public find(specialityId: string): Promise<unknown> {
    return SpecialityModel.findById(specialityId);
  }

  public findByName(specialityName: string): Promise<unknown> {
    return SpecialityModel.findOne({ name: specialityName });
  }

  public create(speciality: SpecialityProps): Promise<SpecialityProps> {
    return SpecialityModel.create(speciality);
  }

  public delete(specialityId: string): Promise<unknown> {
    return SpecialityModel.findByIdAndDelete(specialityId);
  }
}
