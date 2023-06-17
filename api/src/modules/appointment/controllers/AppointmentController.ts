import { Request, Response } from 'express';

import { CreateAppointmentService } from '../services/CreateAppointmentService';
import { DeleteAppointmentService } from '../services/DeleteAppointmentService';
import { ListAllAppointmentService } from '../services/ListAllAppointmentService';
import AppointmentProps from '../model/AppointmentTypeModel';
import { UpdateStatusAppointmentService } from '../services/UpdateStatusAppointmentService';

export class AppointmentController {
  public async index(request: Request, response: Response) {
    try {
      const listAllAppointmentService = new ListAllAppointmentService();

      const appointments = await listAllAppointmentService.execute();

      return response.json(appointments);
    } catch (error) {
      console.log(error);
    }
  }

  public async store(request: Request, response: Response) {
    const appointment: AppointmentProps = <AppointmentProps>request.body;

    const createAppointmentService = new CreateAppointmentService();

    const responseAppointmentService = await createAppointmentService.execute(
      appointment,
    );

    return response.json(responseAppointmentService);
  }

  public async updateStatus(request: Request, response: Response) {
    const { id } = request.params;

    const { status } = request.body;

    const updateStatusAppointmentService = new UpdateStatusAppointmentService();

    await updateStatusAppointmentService.execute(id, status);

    return response.sendStatus(204);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteAppointmentService = new DeleteAppointmentService();

    await deleteAppointmentService.execute(id);

    return response.sendStatus(204);
  }
}
