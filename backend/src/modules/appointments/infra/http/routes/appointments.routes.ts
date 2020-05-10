import { Router } from 'express';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAthenticated';

import AppointmentsController from '../controllers/AppointmentsController';

const routes = Router();
const appointmentsController = new AppointmentsController();

routes.use(ensureAthenticated);

// routes.get('/', async (request, response) => {
//   const appoitments = await appointmentsRepository.find();

//   response.json(appoitments);
// });

routes.post('/', appointmentsController.create);

export default routes;
