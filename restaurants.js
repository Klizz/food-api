import { v4 as uuidv4 } from 'uuid';

const restaurants = [
    {
        "id": uuidv4(),
        "name": "Ensaladas",
        "zona": "sur",
        "menu": [
            {
                "id": uuidv4(),
                "name": "Ensalada Cesar",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Ensalada griega",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Ensalada de pollo",
                "price": "80"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Alitas",
        "zona": "Norte",
        "menu": [
            {
                "id": uuidv4(),
                "name": "Alitas BBQ",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Alitas Bufalo",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Boneless",
                "price": "80"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Sushi express",
        "zona": "sur",
        "menu": [
            {
                "id": uuidv4(),
                "name": "Maki roll",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Tampico roll",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Tempura de pescado",
                "price": "80"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Taquitos",
        "zona": "sur",
        "menu": [
            {
                "id": uuidv4(),
                "name": "Taco de trompo",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Taco de bistec",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Campechana",
                "price": "80"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Super Burgers",
        "zona": "centro",
        "menu": [
            {
                "id": uuidv4(),
                "name": "Hamburguesa doble",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Hamburguesa de pollo",
                "price": "80"
            },
            {
                "id": uuidv4(),
                "name": "Hamburguesa BBQ & aros",
                "price": "80"
            }
        ]
    }
]

export default restaurants;