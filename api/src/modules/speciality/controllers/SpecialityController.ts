import { Request, Response } from 'express';
import { CreateSpecialityService } from '../services/CreateSpecialityService';
import { ListAllSpecialityService } from '../services/ListAllSpecialityService';

import SpecialityProps from '../model/SpecialityTypeModel';
import { DeleteSpecialityService } from '../services/DeleteSpecialityService';

export class SpecialityController {
  public async index(request: Request, response: Response) {
    const listAllSpecialityService = new ListAllSpecialityService();

    const specialities = await listAllSpecialityService.execute();

    return response.json(specialities);
  }

  public async store(request: Request, response: Response) {
    const speciality: SpecialityProps = <SpecialityProps>request.body;

    const createSpecialityService = new CreateSpecialityService();

    const responseSpecialityService = await createSpecialityService.execute(
      speciality,
    );

    return response.json(responseSpecialityService);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteSpecialityService = new DeleteSpecialityService();

    await deleteSpecialityService.execute(id);

    return response.sendStatus(204);
  }
}
