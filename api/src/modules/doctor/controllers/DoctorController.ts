import { Request, Response } from 'express';

import { CreateDoctorService } from '../services/CreateDoctorService';
import { DeleteDoctorService } from '../services/DeleteDoctorService';
import { ListAllDoctorService } from '../services/ListAllDoctorService';
import DoctorProps from '../model/DoctorTypeModel';

export class DoctorController {
  public async index(request: Request, response: Response) {
    const listAllDoctorService = new ListAllDoctorService();

    const doctors = await listAllDoctorService.execute();

    return response.json(doctors);
  }

  public async store(request: Request, response: Response) {
    const doctor: DoctorProps = <DoctorProps>request.body;

    const createDoctorService = new CreateDoctorService();

    const responseDoctorService = await createDoctorService.execute(doctor);

    return response.json(responseDoctorService);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteDoctorService = new DeleteDoctorService();

    await deleteDoctorService.execute(id);

    return response.sendStatus(204);
  }
}
