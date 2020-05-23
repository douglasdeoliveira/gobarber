import { Router } from 'express';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAthenticated';

import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProvidersController from '../controllers/ProvidersController';

const routes = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

routes.use(ensureAthenticated);

routes.get('/', providersController.index);
routes.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);
routes.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default routes;
