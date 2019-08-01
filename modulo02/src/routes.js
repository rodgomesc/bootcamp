import { Router } from 'express';

import UserControler from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserControler.store);

export default routes;
