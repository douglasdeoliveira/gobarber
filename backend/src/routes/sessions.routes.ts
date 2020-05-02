import { Router } from 'express';

import AuthenticationUserService from '../services/AuthenticationUserService';

const routes = Router();

routes.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticationUser = new AuthenticationUserService();

    const { user, token } = await authenticationUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

export default routes;
