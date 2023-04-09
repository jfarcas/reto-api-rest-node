import "reflect-metadata";
import { DataSource } from "typeorm";

import cors from 'cors';
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";


import Router from "./routes"
import dbConfig from "./config/database";


const PORT = process.env.PORT || 8888;

const app: Application = express();

const allowedOrigins = ['http://localhost:8888'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);
app.use(Router);
export const AppDataSource: DataSource = new DataSource(dbConfig);
AppDataSource.initialize().then((_connection) => {
    app.listen(PORT, () => {
    });
}).catch((err) => {
});
