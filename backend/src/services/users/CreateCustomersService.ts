import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CustomerData {
    customerName: string;
    customerLastName: string;
    dateOfBirth: Date;
    CPF: string;
    RG: string;
    gender?: string;
    email: string;
    phone?: string;
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    ZIP?: string;
}

class CreateCustomerService {
    async execute(data: CustomerData) {
        try {

            const existingCPF = await prisma.customer.findFirst({
                where: {
                    cpf: data.CPF,
                },
            });

            if (existingCPF) {
                throw new Error('CPF já cadastrado.');
            }

            const existingRG = await prisma.customer.findFirst({
                where: {
                    rg: data.RG,
                },
            });

            if (existingRG) {
                throw new Error('RG já cadastrado.');
            }

            const existingEmail = await prisma.customer.findFirst({
                where: {
                    email: data.email,
                },
            });

            if (existingEmail) {
                throw new Error('Email já cadastrado.');
            }

            const createdCustomer = await prisma.customer.create({
                data: {
                    firstName: data.customerName,
                    lastName: data.customerLastName,
                    dateOfBirth: data.dateOfBirth,
                    cpf: data.CPF,
                    rg: data.RG,
                    gender: data.gender,
                    email: data.email,
                    phone: data.phone,
                    street: data.street,
                    number: data.number,
                    complement: data.complement,
                    neighborhood: data.neighborhood,
                    city: data.city,
                    state: data.state,
                    zip: data.ZIP,
                    status: true, 
                },
            });

            return createdCustomer;
        } catch (error) {
            console.error('Error creating customer:', error);
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error(String(error));
            }
        }
    }
}

export { CreateCustomerService };