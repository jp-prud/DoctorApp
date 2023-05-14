import { Request, Response } from 'express';
import { CreatePatientService } from '../services/CreatePatientService';
import { ListAllPatientService } from '../services/ListAllPatientService';
import { DeletePatientService } from '../services/DeletePatientService';

import PatientProps from '../model/PatientTypeModel';

export class PatientController {
  public async index(request: Request, response: Response) {
    const listAllPatientService = new ListAllPatientService();

    const patienties = await listAllPatientService.execute();

    return response.json(patienties);
  }

  public async store(request: Request, response: Response) {
    const patient: PatientProps = <PatientProps>request.body;

    const createPatientService = new CreatePatientService();

    const responsePatientService = await createPatientService.execute(patient);

    return response.json(responsePatientService);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deletePatientService = new DeletePatientService();

    await deletePatientService.execute(id);

    return response.sendStatus(204);
  }
}
