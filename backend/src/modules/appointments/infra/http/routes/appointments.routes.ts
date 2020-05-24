import { Router } from 'express';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAthenticated';

import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const routes = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

routes.use(ensureAthenticated);

routes.post('/', appointmentsController.create);
routes.get('/me', providerAppointmentsController.index);

export default routes;
