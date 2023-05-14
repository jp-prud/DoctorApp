import { Joi } from 'celebrate';
import { Types } from 'mongoose'

export const objectIdValidator = Joi.string().custom((value, helpers) => {
  if (!Types.ObjectId.isValid(value)) {
    return helpers.message('Invalid ObjectId');
  }

  return value;
});
