import express from 'express';
import cors from 'cors';
import path from 'path'
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(3333)



// Request Param: Parâmetros que vem na própria rota que identificamos um recurso (localhost:3333/users/1)
// Query Param: Parâmetros que vem na propria rota geralmente opcionais para filtros, paginação, etc (localhost:3333/users?search=Ro)
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = "Rodrigo"
// knex('users).where('name', 'Rodrigo').select('*')