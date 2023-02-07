import { Request, Response } from "express";
import { RemoveProdutoService } from "../../services/produto/RemoveProdutoService";


class RemoveProdutoControle {
    async handle(req: Request, res: Response) {

        const id = req.query.id as string;

        const revomeProdutoSevice = new RemoveProdutoService();

        const produto = await revomeProdutoSevice.execute({
            id
        })

        return res.json(produto);

    }
}

export {RemoveProdutoControle}