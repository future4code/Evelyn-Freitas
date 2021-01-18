import express, { Request, Response } from "express";
import cors from "cors";
import {countries} from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/countries/:id', (req: Request, res: Response) => {
    res.send(countries);
});

app.post('/countries/:id')

app.listen(3003, () => {
    console.log("Server is runnig in http://localhost:3003");
});
