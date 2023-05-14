import { model, Schema } from 'mongoose';

export const PrescriptionModel = model(
  'Prescription',
  new Schema({
    appointment: {
      type: Schema.Types.ObjectId,
      ref: 'Appointment',
      required: true,
    },
    remedy: {
      required: true,
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          startDate: {
            type: Date,
            required: true,
          },
          finalDate: {
            type: Date,
            required: true,
          },
          frequency: {
            type: Number,
            default: 1,
          },
          dosage: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  }),
);
