import { model, Schema } from 'mongoose';

export const FeedbackModel = model(
  'Feedback',
  new Schema({
    appointment: {
      type: Schema.Types.ObjectId,
      ref: 'Appointment',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  }),
);
