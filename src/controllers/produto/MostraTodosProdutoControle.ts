import { Request, Response } from "express";
import { MostraTodosProdutoServico } from "../../services/produto/MostraTodosProdutoServico";

class MostraTodosProdutoControle {
    async handle(req: Request, res: Response) {
        const mostraTodosProdSercive = new MostraTodosProdutoServico();

        const produto = await mostraTodosProdSercive.execute();

        return res.json(produto);
    }
}

export {MostraTodosProdutoControle}