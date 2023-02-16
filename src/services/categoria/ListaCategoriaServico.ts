import prismaClient from "../../prisma";

class ListaCategoriaServico {
    async execute() {

        const categoria = await prismaClient.categoria.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return categoria;
    }
}

export {ListaCategoriaServico}