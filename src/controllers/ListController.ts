import { Request, Response } from 'express';
import knex from '../database/connection';

class ListController {
    async index(request: Request, response: Response) {
        const drivers = await knex('drivers').select('*');
        
        return response.json(drivers);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const driversId = await knex('drivers').where('id', id).first();

        if (!driversId) {
            return response.status(400).json({ message: 'Motorista não encontrado'});
        }

        return response.json(driversId);
    }
    
}

export default ListController;