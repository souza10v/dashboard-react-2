import { Router, Request, Response } from "express";
import { API_BASE_PATH } from "./api/constants";
import { ListingCustomersController } from "./controllers/users/ListingCustomersController";


const router = Router();

let users = [
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

let products = [
    {
        id: 1,
        img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
        title: "Playstation 5 Digital Edition",
        color: "white",
        producer: "Sony",
        price: "$250.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 2,
        img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
        title: "Dell Laptop KR211822",
        color: "black",
        producer: "Dell",
        price: "$499.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 3,
        img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
        title: "Samsung TV 4K SmartTV",
        color: "gray",
        producer: "Samsung",
        price: "$999.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 4,
        img: "https://raylo.imgix.net/iphone-14-blue.png",
        title: "Apple Iphone 14 Pro Max",
        color: "white",
        producer: "Apple",
        price: "$799.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 5,
        img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
        title: "Philips Hue Play Gradient",
        color: "rainbow",
        producer: "Philips",
        price: "$39.99",
        createdAt: "01.02.2023",
    },
    {
        id: 6,
        img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
        title: "Logitech MX Master 3",
        color: "black",
        producer: "Logitech",
        price: "$59.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 7,
        img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
        title: "Rode Podcast Microphone",
        color: "gray",
        producer: "Rode",
        price: "$119.49",
        createdAt: "01.02.2023",
    },
    {
        id: 8,
        img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
        title: "Toshiba Split AC 2",
        color: "white",
        producer: "Toshiba",
        price: "$899.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 9,
        img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
        title: "Sony Bravia KDL-47W805A",
        color: "black",
        producer: "Sony",
        price: "$970.49",
        createdAt: "01.02.2023",
    },
    {
        id: 10,
        img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
        title: "Acer Laptop 16 KL-4804",
        color: "black",
        producer: "Acer",
        price: "$599.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
];

// GET CUSTOMER
router.get("/api/customer", (req: Request, res: Response) => {
    res.json(users);
});

// GET CUSTOMERS -- OK
router.get(`${API_BASE_PATH}/customers`, new ListingCustomersController().handle);

// ADD CUSTOMERS
router.post(`${API_BASE_PATH}/new-customer`, (req: Request, res: Response) => {
    console.log(req.body)
    //res.json(users);
});

// DELETE USER
router.delete("/api/users/:id", (req: Request, res: Response) => {
    users = users.filter((user) => user.id !== parseInt(req.params.id));
    res.json("User deleted!");
});

// GET PRODUCTS
router.get(`${API_BASE_PATH}/products`, (req: Request, res: Response) => {
    res.json(products);
});

// GET PRODUCT
router.get("/api/products/:id", (req: Request, res: Response) => {
    const product = products.find((product) => product.id === parseInt(req.params.id));
    res.json(product);
});

// ADD PRODUCT
router.post("/api/products", (req: Request, res: Response) => {
    products.unshift(req.body)
    res.json(products);
});

// DELETE PRODUCT
router.delete("/api/products/:id", (req: Request, res: Response) => {
    products = products.filter((product) => product.id !== parseInt(req.params.id));
    res.json("Product deleted!");
});


router.get('/test', (req: Request, res: Response) => {
    return res.json({ ok: true })
})

export { router }