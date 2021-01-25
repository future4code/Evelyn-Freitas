import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { users } from "./types/users";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

export const getAllUsers = async (
   req: Request, 
   res: Response
): Promise<void> => {
   try {
      const users = await selectAllUsers()

      if (!users.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado.");
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage)
   }
} 

export default async function selectAllUsers(
): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)
   return result[0];
}

app.get("/users/all", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {
      const users: users[] = await connection.raw(`
         
      `)

      if(!users.length){
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado.")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
});

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});