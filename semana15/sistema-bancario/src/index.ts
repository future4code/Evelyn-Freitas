import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { accounts } from "./accounts"
import e from "express";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const { name, CPF, dateOfBirth } = req.body;
        
        const [day, month, year] = dateOfBirth.split("/");

        const birthDay: Date = new Date(`${year}-${month}-${day}`);

        const ageInMilliseconds: number = Date.now() - dateOfBirth.getTime();

        const ageInYears: number = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;

        if (ageInYears < 18) {
            res.statusCode = 406
            throw new Error("A idade deve ser maior que 18 anos.");
        }

        accounts.push({
            name,
            CPF,
            birthDay,
            balance: 0,
            statement: []
        })

        res.status(201).send("Conta criada com sucesso!")
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message)
    }
});

app.get("/users/all", (req: Request, res: Response) => {
    try {
        if (!accounts.length) {
            res.statusCode = 404
            throw new Error("Conta não encontrada.")
        } 

        res.status(200).send(accounts)
    } catch (error) {
        console.log(error);
        res.send(error.message)        
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