import { Router } from 'express';

const routes = new Router();

// Rotas
routes.get('/', (req, res) => res.json({ message: 'Olá Mundo' }));

export default routes;
