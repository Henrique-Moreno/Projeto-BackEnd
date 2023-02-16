import { Request, Response } from "express";
import { CriarProdutoServico } from "../../services/produto/CriarProdutoServico";

class CriarProdutoControle {
    async handle(req: Request, res: Response) {

        const {name, price,  categoria_id} = req.body;

        const criarProdutoServico = new CriarProdutoServico();

        if(!req.file) {
            throw new Error("Arquivo não encotrato")
        } else {

            const {originalname, filename: banner} = req.file;

            const produto = await criarProdutoServico.execute({ name, price, banner, categoria_id });

            return res.json(produto)
        }
    }
}

export {CriarProdutoControle}