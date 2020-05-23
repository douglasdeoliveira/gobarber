import { Router } from 'express';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAthenticated';

import ProvidersController from '../controllers/ProvidersController';

const routes = Router();
const providersController = new ProvidersController();

routes.use(ensureAthenticated);

routes.get('/', providersController.index);

export default routes;
