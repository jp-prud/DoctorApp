import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { SpecialityController } from '../controllers/SpecialityController';
import { objectIdValidator } from '@shared/http/routes/validatorParams';

const specialityRouter = Router();
const specialityController = new SpecialityController();

specialityRouter.get('/', specialityController.index);

specialityRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      icon: Joi.string().required(),
    },
  }),
  specialityController.store,
);

specialityRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: objectIdValidator,
    },
  }),
  specialityController.delete,
);

export default specialityRouter;
