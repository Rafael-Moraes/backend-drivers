import { Request, Response } from 'express';
import knex from '../database/connection';

class DriversController {
    async create (request: Request, response: Response) {
        const {
            name, 
            phone, 
            birth_date, 
            license, 
            license_type, 
            cpf 
        } = request.body;

        const driver = {
            name, 
            phone, 
            birth_date, 
            license, 
            license_type, 
            cpf,
            active: true
        };
    
        await knex('drivers').insert(driver)
    
        return response.json({
            ... driver
        });
    }
}

export default DriversController;