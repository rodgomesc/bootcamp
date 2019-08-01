import { Router } from 'express';

import UserControler from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionController.store);

export default routes;
