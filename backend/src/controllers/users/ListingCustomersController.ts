import { Request, Response } from 'express'
import { ListingCustomersService } from '../../services/users/ListingCustomersService';

class ListingCustomersController {
    async handle(req: Request, res: Response) {
        try {
            const listingCustomersService = new ListingCustomersService();
            const customers = await listingCustomersService.execute();
            res.json(customers); 
          } catch (error) {
            //console.error('Error fetching customers:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    }
  }
  
  export { ListingCustomersController };
