import mongoose from 'mongoose';

interface FeedbackProps extends mongoose.Document {
  appointment: string;
  description: string;
}

export default FeedbackProps;
