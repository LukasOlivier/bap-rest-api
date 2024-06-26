import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;