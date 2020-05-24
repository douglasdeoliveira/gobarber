import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import UserAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersController';
import ensureAuthenticated from '../middlewares/ensureAthenticated';

const routes = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

routes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default routes;
