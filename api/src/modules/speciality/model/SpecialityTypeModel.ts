import mongoose from 'mongoose';

interface SpecialityProps extends mongoose.Document {
  name: string;
  icon: string;
}

export default SpecialityProps;
