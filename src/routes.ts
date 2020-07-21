import express, { request, response } from 'express';

import DriversController from './controllers/DriversController';
import ListController from './controllers/ListController';

const routes = express.Router();
const driversController = new DriversController();
const listController = new ListController();

routes.post('/drivers', driversController.create);

routes.get('/drivers', listController.index);
routes.get('/drivers/:id', listController.show);

export default routes;

 



