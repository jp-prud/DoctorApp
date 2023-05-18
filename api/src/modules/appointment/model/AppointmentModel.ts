import { model, Schema } from 'mongoose';

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
        'Marcado',
        'Em_Atendimento',
        'Aguardando_Pagamento',
        'Finalizado',
      ],
      default: 'Aguardando',
    },
    appointmentTime: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    feedback: {
      type: Schema.Types.ObjectId,
      ref: 'Feedback',
      options: {
        allowNull: true,
      },
      default: null,
    },
    prescription: {
      type: Schema.Types.ObjectId,
      ref: 'Prescription',
      options: {
        allowNull: true,
      },
      default: null,
    },
  }),
);
