import { Request, Response } from 'express';
import knex from '../database/connection';

class ListController {
    async index(request: Request, response: Response) {
        const drivers = await knex('drivers').select('*');
        
        return response.json(drivers);
    }
    
}

export default ListController;