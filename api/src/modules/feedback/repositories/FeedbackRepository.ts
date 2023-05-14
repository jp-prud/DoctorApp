import { FeedbackModel } from '../model/FeedbackModel';
import FeedbackProps from '../model/FeedbackTypeModel';

export class FeedbackRepository {
  public listAll(): Promise<FeedbackProps[]> {
    return FeedbackModel.find().populate('appointment');
  }

  public create(feedback: FeedbackProps) {
    return FeedbackModel.create(feedback);
  }

  public delete(specialityId: string): Promise<unknown> {
    return FeedbackModel.findByIdAndDelete(specialityId);
  }
}
