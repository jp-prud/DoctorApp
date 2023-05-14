import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { PatientController } from '../controllers/PatientController';
import { objectIdValidator } from '@shared/http/routes/validatorParams';

const patientRouter = Router();
const patientController = new PatientController();

patientRouter.get('/', patientController.index);

patientRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      cpf: Joi.string().required(),
      address: Joi.string().required(),
      phone: Joi.string(),
    },
  }),
  patientController.store,
);

patientRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: objectIdValidator,
    },
  }),
  patientController.delete,
);

export default patientRouter;
