import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAthenticated';

const routes = Router();
const profileController = new ProfileController();

routes.use(ensureAuthenticated);

routes.get('/', profileController.show);
routes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string().when('old_password', {
        is: Joi.exist(),
        then: Joi.required(),
      }),
      password_confirmation: Joi.string()
        .when('old_password', {
          is: Joi.exist(),
          then: Joi.required(),
        })
        .valid(Joi.ref('password')),
    },
  }),
  profileController.update,
);

export default routes;
