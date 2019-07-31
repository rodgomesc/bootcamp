import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rodrigo Gomes',
    email: 'rodgomesc@gmail.com',
    password_hash: '883092810938',
  });

  return res.json({ message: user });
});

export default routes;
