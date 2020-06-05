import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(3333);
console.log('Server available on port 3333')