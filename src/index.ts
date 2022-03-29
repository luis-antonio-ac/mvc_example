import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

dotenv.config();

app.listen(3000);
