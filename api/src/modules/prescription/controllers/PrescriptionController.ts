import { Request, Response } from 'express';
import { CreatePrescriptionService } from '../services/CreatePrescriptionService';
import { ListAllPrescriptionService } from '../services/ListAllPrescriptionService';
import { DeletePrescriptionService } from '../services/DeletePrescriptionService';

import PrescriptionProps from '../model/PrescriptionTypeModel';

export class PrescriptionController {
  public async index(request: Request, response: Response) {
    const listAllPrescriptionService = new ListAllPrescriptionService();

    const prescriptionies = await listAllPrescriptionService.execute();

    return response.json(prescriptionies);
  }

  public async store(request: Request, response: Response) {
    const prescription: PrescriptionProps = <PrescriptionProps>request.body;

    const createPrescriptionService = new CreatePrescriptionService();

    const responsePrescriptionService = await createPrescriptionService.execute(
      prescription,
    );

    return response.json(responsePrescriptionService);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deletePrescriptionService = new DeletePrescriptionService();

    await deletePrescriptionService.execute(id);

    return response.sendStatus(204);
  }
}
