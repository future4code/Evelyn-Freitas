// Resolução do Exercício 1:
// a. Método GET, pois iremos fazer uma requisição de busca pelos usuários.
// b. Dando a chamando por um nome adequado na requisição:  

import express, {Request, Response} from 'express';
import cors from 'cors';

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const userType: string = req.query.type as string;

        if (!userType) {
            errorCode = 422;
            throw new Error("Tipo de usuário inválido. Por favor preencha corretamente.");
        }

        const myUserType = users.find(((u: user) => u.type.toLowerCase() === u.type.toLowerCase()));
        if (!myUserType) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        const result = myUserType;
            res
                .status(200)
                .send(result);

    } catch (error) {
            res
                .status(errorCode)
                .send(error.message);
    }

});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
