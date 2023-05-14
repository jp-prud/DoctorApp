import mongoose from 'mongoose';

interface PrescriptionProps extends mongoose.Document {
  appointment: string;
  remedy: {
    name: {
      type: string;
    };
    startDate: {
      type: Date;
    };
    finalDate: {
      type: Date;
    };
    frequency: {
      type?: number;
    };
    dosage: {
      type?: number;
    };
  }[];
}

export default PrescriptionProps;
