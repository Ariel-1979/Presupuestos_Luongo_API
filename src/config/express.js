import router from '#Routes/index.js';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const expressApp = express();
expressApp.listen();

// TODO Middlewares
expressApp.use(express.json());
expressApp.use(cors());
expressApp.use(morgan('dev'));

// TODO Routes
expressApp.use('/', router);

export default expressApp;
