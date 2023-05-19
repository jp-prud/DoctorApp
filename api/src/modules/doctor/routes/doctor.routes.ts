import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { DoctorController } from '../controllers/DoctorController';
import { objectIdValidator } from '@shared/http/routes/validatorParams';

const doctorRouter = Router();
const doctorController = new DoctorController();

doctorRouter.get('/', doctorController.index);

doctorRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      crm: Joi.string().required(),
      description: Joi.string().required(),
      phone: Joi.string().required(),
      speciality: objectIdValidator,
    },
  }),
  doctorController.store,
);

doctorRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: objectIdValidator,
    },
  }),
  doctorController.delete,
);

export default doctorRouter;
