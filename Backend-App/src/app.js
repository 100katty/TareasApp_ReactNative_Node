import express from "express";
import tasksRouter from './routes/tasks'
import cors from 'cors';
import morgan from 'morgan';
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swaggerOptions";


const app = express();
const specs = swaggerJsdoc(options);



app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(tasksRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
export default app
