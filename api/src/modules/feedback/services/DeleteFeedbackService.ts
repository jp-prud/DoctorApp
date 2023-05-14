import { FeedbackRepository } from '../repositories/FeedbackRepository';

export class DeleteFeedbackService {
  public async execute(feedbackId: string) {
    const feedbackRepository = new FeedbackRepository();

    return await feedbackRepository.delete(feedbackId);
  }
}
