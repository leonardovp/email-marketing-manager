// app.ts
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import accountsRouter from './routes/accouonts-route';

const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.use(accountsRouter);

const port = parseInt(`${process.env.PORT}`);

app.listen(port);
console.log(`Running on port ${port}`);