import prismaClient from "../../prisma";

interface ProdutoRequest {
    categoria_id: string;
}

class ListaCategoriaServico {
    async execute({categoria_id}: ProdutoRequest) {

        const listaCategoriaServico = await prismaClient.produto.findMany({
            where: {
                categoria_id: categoria_id
            }
        })

        return listaCategoriaServico;
    }
}

export {ListaCategoriaServico}