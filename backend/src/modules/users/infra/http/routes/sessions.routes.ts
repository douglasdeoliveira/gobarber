import { Router } from 'express';

import AuthenticationUserService from '@modules/users/services/AuthenticationUserService';

import UsersRepository from '../../typeorm/repositories/UsersRepository';

const routes = Router();

routes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const authenticationUser = new AuthenticationUserService(usersRepository);

  const { user, token } = await authenticationUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default routes;
