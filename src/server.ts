import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { rotas } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(rotas);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'erro',
        message: 'Erro do servidor interno'
    })
})

app.listen(3333 , () => console.log('Servidor online'));