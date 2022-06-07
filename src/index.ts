import express, { Application, Request, Response } from 'express';
import { PORT } from './env';
import userRoutes from './user/routes';
import bankRoutes from './bank/routes';
import cors from 'cors';
export const app: Application = express();

// Different middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));

app.use(cors({ credentials: true, origin: true }));
app.use(userRoutes);
app.use(bankRoutes);
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error) {
  console.error(`Error occured,`, error);
}
