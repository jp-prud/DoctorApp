import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { AppointmentController } from '../controllers/AppointmentController';
import { objectIdValidator } from '@shared/http/routes/validatorParams';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.get('/', appointmentController.index);

appointmentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      patient: objectIdValidator,
      doctor: objectIdValidator,
      status: Joi.string().valid(
        'Aguardando',
        'Em_Atendimento',
        'Aguardando_Pagamento',
        'Finalizado',
      ),
      feedback: objectIdValidator,
      prescription: objectIdValidator,
    },
  }),
  appointmentController.store,
);

appointmentRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: objectIdValidator,
    },
  }),
  appointmentController.delete,
);

export default appointmentRouter;