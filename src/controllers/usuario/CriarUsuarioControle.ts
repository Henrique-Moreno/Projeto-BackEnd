import { Request, response, Response } from "express";
import { CriarUsuarioServico } from "../../services/usuario/CriarUsuarioServico";

class CriarUsuarioControle {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const criarUsuarioServico = new CriarUsuarioServico();

        const usuario = await criarUsuarioServico.execute({ name, email, password });

        return res.json(usuario);

    }
}

export {CriarUsuarioControle}