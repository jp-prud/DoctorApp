import { Request, Response } from 'express';
import { CreateFeedbackService } from '../services/CreateFeedbackService';
import { ListAllFeedbackService } from '../services/ListAllFeedbackService';
import { DeleteFeedbackService } from '../services/DeleteFeedbackService';

import FeedbackProps from '../model/FeedbackTypeModel';

export class FeedbackController {
  public async index(request: Request, response: Response) {
    const listAllFeedbackService = new ListAllFeedbackService();

    const feedbackies = await listAllFeedbackService.execute();

    return response.json(feedbackies);
  }

  public async store(request: Request, response: Response) {
    const feedback: FeedbackProps = <FeedbackProps>request.body;

    const createFeedbackService = new CreateFeedbackService();

    const responseFeedbackService = await createFeedbackService.execute(
      feedback,
    );

    return response.json(responseFeedbackService);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteFeedbackService = new DeleteFeedbackService();

    await deleteFeedbackService.execute(id);

    return response.sendStatus(204);
  }
}
