import { Request, Response } from "express";
import { CriarCategoriaServico } from "../../services/categoria/CriarCategoriaServico";

class CriarCategoriaControle {
    async handle(req: Request, res: Response) {

        const {name} = req.body;

        const criarCategoriaServico = new CriarCategoriaServico();

        const categoria = await criarCategoriaServico.execute({
            name
        });

        return res.json(categoria);

    }
}

export {CriarCategoriaControle}