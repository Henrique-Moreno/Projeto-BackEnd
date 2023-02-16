import { Request, Response } from "express";
import { EditarProdutoService } from "../../services/produto/EditarProdutoService";

class EditarPridutoControle {
    async handle(req: Request, res: Response) {

        const {id, name, price} = req.body;

        const editarProdutoService = new EditarProdutoService();

        const produto = await editarProdutoService.execute({  id, name, price });

        return res.json(produto)
    }
}

export { EditarPridutoControle }