import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

type conta = {
    nome: string,
    CPF: number,
    dataDeNascimento: string,
    saldo: number,
    extrato: any[]  
}

type transacoes = {
    
}

let users: conta[] = [
    {
        nome: "Victória Mattos",
        CPF: 12323245611,
        dataDeNascimento: "10/12/2000",
        saldo: 0,
        extrato: [
            {
                valor: 0, 
                data: "02/01/2021", 
                descricao: "Saldo zerado, nenhuma movimentação na conta"
            },
        ]    
    },
    {
        nome: "Pedro Henrique",
        CPF: 32154513155,
        dataDeNascimento: "22/08/1985",
        saldo: 0,
        extrato: [
            {
                valor: 0, 
                data: "01/01/2021", 
                descricao: "Saldo zerado, nenhuma movimentação na conta"
            },
        ]    
    },
    {
        nome: "Carol Nascimento",
        CPF: 17585435411,
        dataDeNascimento: "02/05/1995",
        saldo: 0,
        extrato: [
            {
                valor: 0, 
                data: "15/12/2020", 
                descricao: "Saldo zerado, nenhuma movimentação na conta"
            },
        ]    
    }    
]

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});