import prismaClient from "../../prisma";

interface ProdutoRequest {
    id: string;
}

class RemoveProdutoService {
    async execute({id}: ProdutoRequest) {

        const produto = await prismaClient.produto.delete({
            where: {
                id: id
            }
        })
        return produto;
    }
}

export {RemoveProdutoService}