import { Request, Response } from "express";
import { DetalhesUsuarios } from "../../services/usuario/DetalhesUsuarios";

class DetalhesControle {
    async handle(req: Request, res: Response){

        const usuario_id = req.usuario_id;

        const detalhesUsuarios = new DetalhesUsuarios();

        const usuario = await detalhesUsuarios.execute(usuario_id);

        return res.json(usuario);
    }
}

export { DetalhesControle }