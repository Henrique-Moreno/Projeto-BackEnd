import { Request, Response } from "express";
import { AutenticacaoDeUsuario } from "../../services/usuario/AutenticacaoDeUsuario";

class AutenticacaoControle {
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const autenticacaoDeUsuario = new AutenticacaoDeUsuario();

        const autenticacao = await autenticacaoDeUsuario.execute({
            email,
            password
        })

        return res.json(autenticacao);

    }
}

export { AutenticacaoControle }