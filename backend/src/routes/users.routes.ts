import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import ensureAuthenticated from '../middlewares/ensureAthenticated';
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

routes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();

      const user = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      delete user.password;

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  },
);

export default routes;
