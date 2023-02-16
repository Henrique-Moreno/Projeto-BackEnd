import prismaClient from "../../prisma";

class DetalhesUsuarios {
    async execute(usuario_id: string){

        const usuario = await prismaClient.usuario.findFirst({
            where: {
                id: usuario_id
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

export { DetalhesUsuarios }