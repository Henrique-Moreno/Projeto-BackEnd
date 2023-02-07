import { Request, Response } from "express";
import { ListaCategoriaServico } from "../../services/categoria/ListaCategoriaServico";

class ListaCategoriaControle {
    async handle(req: Request, res: Response) {

        const listaCategoriaServico = new ListaCategoriaServico();

        const categoria = await listaCategoriaServico.execute();

        return res.json(categoria);

    }
}

export {ListaCategoriaControle}