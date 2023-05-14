import { Request, Response } from 'express';

import { CreateAppointmentService } from '../services/CreateAppointmentService';
import { DeleteAppointmentService } from '../services/DeleteAppointmentService';
import { ListAllAppointmentService } from '../services/ListAllAppointmentService';
import AppointmentProps from '../model/AppointmentTypeModel';

export class AppointmentController {
  public async index(request: Request, response: Response) {
    const listAllAppointmentService = new ListAllAppointmentService();

    const appointments = await listAllAppointmentService.execute();

    return response.json(appointments);
  }

  public async store(request: Request, response: Response) {
    const appointment: AppointmentProps = <AppointmentProps>request.body;

    const createAppointmentService = new CreateAppointmentService();

    const responseAppointmentService = await createAppointmentService.execute(
      appointment,
    );

    return response.json(responseAppointmentService);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteAppointmentService = new DeleteAppointmentService();

    await deleteAppointmentService.execute(id);

    return response.sendStatus(204);
  }
}
