import FeedbackProps from '../model/FeedbackTypeModel';
import { FeedbackRepository } from '../repositories/FeedbackRepository';

export class ListAllFeedbackService {
  public async execute(): Promise<FeedbackProps[]> {
    const feedbackRepository = new FeedbackRepository();

    const allSpecialities = await feedbackRepository.listAll();

    return allSpecialities;
  }
}
