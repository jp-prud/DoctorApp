import { model, Schema } from 'mongoose';

export const DoctorModel = model(
  'Doctor',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    crm: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    speciality: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Speciality',
    },
  }),
);
