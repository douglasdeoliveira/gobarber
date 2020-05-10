import { parseISO } from 'date-fns';
import { Router } from 'express';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAthenticated';

const routes = Router();
const appointmentsRepository = new AppointmentsRepository();

routes.use(ensureAthenticated);

// routes.get('/', async (request, response) => {
//   const appoitments = await appointmentsRepository.find();

//   response.json(appoitments);
// });

routes.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = await createAppointment.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default routes;
