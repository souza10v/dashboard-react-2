import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

let customersSample = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Silva",
        firstName: "João",
        email: "joao.silva@gmail.com",
        phone: "11 98765-4321",
        createdAt: "05.07.2023",
        verified: true,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Souza",
        firstName: "Maria",
        email: "maria.souza@gmail.com",
        phone: "21 99876-5432",
        createdAt: "03.07.2023",
        verified: true,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Oliveira",
        firstName: "Carlos",
        email: "carlos.oliveira@hotmail.com",
        phone: "31 91234-5678",
        createdAt: "02.07.2023",
        verified: true,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Pereira",
        firstName: "Ana",
        email: "ana.pereira@gmail.com",
        phone: "41 93456-7890",
        createdAt: "12.06.2023",
        verified: true,
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Santos",
        firstName: "Pedro",
        email: "pedro.santos@yahoo.com",
        phone: "51 94567-8901",
        createdAt: "10.06.2023",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Rodrigues",
        firstName: "Fernanda",
        email: "fernanda.rodrigues@mail.com",
        phone: "61 95678-9012",
        createdAt: "11.05.2023",
        verified: true,
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Almeida",
        firstName: "Lucas",
        email: "lucas.almeida@gmail.com",
        phone: "71 96789-0123",
        createdAt: "04.05.2023",
    },
    {
        id: 8,
        img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Costa",
        firstName: "Beatriz",
        email: "beatriz.costa@mail.com",
        phone: "81 97890-1234",
        createdAt: "08.04.2023",
        verified: true,
    },
    {
        id: 9,
        img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Ribeiro",
        firstName: "Felipe",
        email: "felipe.ribeiro@gmail.com",
        phone: "91 98901-2345",
        createdAt: "04.04.2023",
    },
    {
        id: 10,
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Martins",
        firstName: "Juliana",
        email: "juliana.martins@gmail.com",
        phone: "11 99012-3456",
        createdAt: "01.04.2023",
        verified: true,
    },
    {
        id: 11,
        img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Lima",
        firstName: "Gustavo",
        email: "gustavo.lima@gmail.com",
        phone: "21 90123-4567",
        createdAt: "05.04.2023",
        verified: true,
    },
    {
        id: 12,
        img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Barbosa",
        firstName: "Larissa",
        email: "larissa.barbosa@hotmail.com",
        phone: "31 91234-5678",
        createdAt: "01.03.2023",
    },
    {
        id: 13,
        img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Gomes",
        firstName: "Matheus",
        email: "matheus.gomes@gmail.com",
        phone: "41 92345-6789",
        createdAt: "03.02.2023",
    },
    {
        id: 14,
        img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Fernandes",
        firstName: "Aline",
        email: "aline.fernandes@hotmail.com",
        phone: "51 93456-7890",
        createdAt: "01.02.2023",
    },
    {
        id: 15,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Moraes",
        firstName: "Ricardo",
        email: "ricardo.moraes@gmail.com",
        phone: "61 94567-8901",
        createdAt: "01.01.2023",
    },
  ];
  

class ListingCustomersService {
    async execute() {

        const customers = await prisma.customer.findMany()
        return customers 
    }
}

export { ListingCustomersService }