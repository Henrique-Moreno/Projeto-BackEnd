import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UsuarioRequest {
    name: string;
    email: string;
    password: string;
}

class CriarUsuarioServico {
    async execute({ name, email, password }: UsuarioRequest){

        if(!email) {
            throw new Error("Email incorreto")
        }

        const usuarioJaExiste = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if(usuarioJaExiste) {
            throw new Error("Usuario já existe")
        }

        const senhaCriptografada = await hash(password, 8)

        const usuario = await prismaClient.usuario.create({
            data: {
                name: name,
                email: email,
                password: senhaCriptografada,
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return usuario;
    }
}

export {CriarUsuarioServico}