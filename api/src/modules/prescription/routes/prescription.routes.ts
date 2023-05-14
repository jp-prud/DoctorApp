import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { PrescriptionController } from '../controllers/PrescriptionController';
import { objectIdValidator } from '@shared/http/routes/validatorParams';

const prescriptionRouter = Router();
const prescriptionController = new PrescriptionController();

prescriptionRouter.get('/', prescriptionController.index);

prescriptionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      appointment: objectIdValidator,
      remedy: Joi.array().items({
        name: Joi.string().required(),
        startDate: Joi.string().required(),
        finalDate: Joi.string().required(),
        frequency: Joi.number(),
        dosage: Joi.number(),
      }),
    },
  }),
  prescriptionController.store,
);

prescriptionRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: objectIdValidator,
    },
  }),
  prescriptionController.delete,
);

export default prescriptionRouter;
