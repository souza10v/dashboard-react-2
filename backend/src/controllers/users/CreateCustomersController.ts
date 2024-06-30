import { Request, Response } from 'express'
import { CreateCustomerService } from '../../services/users/CreateCustomersService';

class CreateCustomerController {
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

            let errorMessage = 'Failed to create customer';

            if (error.message === 'CPF already exists' || error.message === 'RG already exists' || error.message === 'Email already exists') {
                errorMessage = error.message;
            }

            res.status(400).json({ success: false, error: errorMessage });
        }
    }
}

export { CreateCustomerController };