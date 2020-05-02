import { Router } from 'express';

import appointments from './appointments.routes';
import sessions from './sessions.routes';
import users from './users.routes';

const routes = Router();

routes.use('/sessions', sessions);
routes.use('/appointments', appointments);
routes.use('/users', users);

export default routes;
