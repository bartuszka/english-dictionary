/* eslint no-undef: off */
/* eslint @typescript-eslint/no-var-requires: off */
import express from 'express';
import bodyParser from 'body-parser';
import { Express, NextFunction, Request, Response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

import wordsRouter from './routes/words';

const expressApp: Express = express();

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: false }));

expressApp.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X_Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
})

expressApp.use(wordsRouter);

expressApp.use((error: HttpErrorResponse, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status).json(error);
});

export default expressApp;
