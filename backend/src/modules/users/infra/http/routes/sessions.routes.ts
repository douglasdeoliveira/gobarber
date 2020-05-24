import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const routes = Router();
const sessionsController = new SessionsController();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default routes;
