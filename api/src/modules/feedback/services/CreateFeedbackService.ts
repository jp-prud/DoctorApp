import FeedbackProps from '../model/FeedbackTypeModel';
import { FeedbackRepository } from '../repositories/FeedbackRepository';

export class CreateFeedbackService {
  public async execute(feedback: FeedbackProps) {
    const feedbackRepository = new FeedbackRepository();

    const newFeedback = await feedbackRepository.create(feedback);

    return newFeedback;
  }
}
