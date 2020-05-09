import { parseISO } from 'date-fns';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateAppointmentService from '../../modules/appointments/services/CreateAppointmentService';
import ensureAthenticated from '../middlewares/ensureAthenticated';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const routes = Router();

routes.use(ensureAthenticated);

routes.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appoitments = await appointmentsRepository.find();

  response.json(appoitments);
});

routes.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default routes;
