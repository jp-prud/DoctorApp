import { model, Schema } from "mongoose";

export const AppointmentModel = model(
  'Appointment',
  new Schema({
    patient: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Patient',
    },
    doctor: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Doctor',
    },
    status: {
      type: String,
      enum: [
        'Aguardando',
        'Em_Atendimento',
        'Aguardando_Pagamento',
        'Finalizado',
      ],
      default: 'Aguardando',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    feedback: {
      type: Schema.Types.ObjectId,
      ref: 'Feedback',
    },
    prescription: {
      type: Schema.Types.ObjectId,
      ref: 'Prescription',
    },
  }),
);
