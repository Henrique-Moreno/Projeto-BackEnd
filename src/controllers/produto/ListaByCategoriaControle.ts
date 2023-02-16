import {Request, Response} from 'express';
import { ListaCategoriaServico } from '../../services/produto/ListaCategoriaServico';

class ListaByCategoriaControle {
    async handle(req: Request, res: Response) {

        const categoria_id = req.query.categoria_id as string;

        const listaCategoriaControle = new ListaCategoriaServico();

        const produtos = await listaCategoriaControle.execute({categoria_id});

        return res.json(produtos)

    }
}

export {ListaByCategoriaControle}