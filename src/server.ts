import express, { request, response } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(routes);
app.use(cors());

app.listen(3333, () => {
    console.log('Server started on port 3333!')
})
