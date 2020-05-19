import { Router } from 'express';

import appointments from '@modules/appointments/infra/http/routes/appointments.routes';
import password from '@modules/users/infra/http/routes/password.routes';
import sessions from '@modules/users/infra/http/routes/sessions.routes';
import users from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/sessions', sessions);
routes.use('/appointments', appointments);
routes.use('/users', users);
routes.use('/password', password);

export default routes;
