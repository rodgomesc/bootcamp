import { Router } from 'express';

import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentControler from './app/controllers/AppointmentController';
import ScheduleControler from './app/controllers/ScheduleController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.get('/appointments', AppointmentControler.index);
routes.post('/appointments', AppointmentControler.store);

routes.get('/schedule', ScheduleControler.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
