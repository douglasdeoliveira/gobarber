import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAthenticated';

const routes = Router();
const profileController = new ProfileController();

routes.use(ensureAuthenticated);

routes.get('/', profileController.show);
routes.put('/', profileController.update);

export default routes;
