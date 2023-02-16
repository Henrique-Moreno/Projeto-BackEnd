import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AutenticacaoDePedido {
    email: string;
    password: string;
}

class AutenticacaoDeUsuario {
    async execute( {email, password }: AutenticacaoDePedido) {
        const usuario = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if(!usuario) {
            throw new Error("Senha incorrenta")
        }

        const senhaCorreta = await compare(password, usuario.password)

        if(!senhaCorreta) {
            throw new Error("Senha incorrenta")
        }

        const token = sign(
            {
                name: usuario.name,
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                subject: usuario.id,
                expiresIn: '30d'
            }
        )

        return {
            id: usuario.id,
            name: usuario.name,
            email: usuario.email,
            token: token
         }

    }
}

export { AutenticacaoDeUsuario }