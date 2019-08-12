import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes/api';
import dbConnect from './helpers/database';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

routes(app);

app.listen(PORT, () => {
  dbConnect();
});
