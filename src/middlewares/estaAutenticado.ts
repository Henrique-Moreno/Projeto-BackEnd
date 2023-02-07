import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string;
}

export function estaAutenticado(req: Request, res: Response, next: NextFunction) {
    
    const autenticacaoDoToken = req.headers.authorization;

    if(!autenticacaoDoToken) {
        return res.status(401).end();
    }

    const [, token] = autenticacaoDoToken.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        req.usuario_id = sub;

        return next();

    } catch(err) {
        return res.status(401).end();
    }
}