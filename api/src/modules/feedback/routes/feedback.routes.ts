import { Router } from 'express';
import { FeedbackController } from '../controllers/FeedbackController';

const feedbackRouter = Router();
const feedbackController = new FeedbackController();

feedbackRouter.get('/', feedbackController.index);

feedbackRouter.post('/', feedbackController.store);

feedbackRouter.delete('/:id', feedbackController.delete);

export default feedbackRouter;
