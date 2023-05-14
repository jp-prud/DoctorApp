import { model, Schema } from 'mongoose';

import SpecialityProps from './SpecialityTypeModel';

export const SpecialityModel = model<SpecialityProps>(
  'Speciality',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  }),
);
