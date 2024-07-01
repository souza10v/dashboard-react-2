import { Request, Response } from 'express'
import { CreateCustomerService } from '../../services/users/CreateCustomersService';

class CreateCustomersController {
    async handle(req: Request, res: Response) {

        const {
            customerName,
            customerLastName,
            dateOfBirth,
            CPF,
            RG,
            gender,
            email,
            phone,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            ZIP
        } = req.body;

        try {
            const createCustomerService = new CreateCustomerService();

            const createdCustomer = await createCustomerService.execute({
                customerName,
                customerLastName,
                dateOfBirth,
                CPF,
                RG,
                gender,
                email,
                phone,
                street,
                number,
                complement,
                neighborhood,
                city,
                state,
                ZIP
            });

            res.json({ success: true })

        } catch (error: any) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

export { CreateCustomersController };