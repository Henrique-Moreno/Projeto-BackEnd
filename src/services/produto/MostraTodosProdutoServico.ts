import prismaClient from "../../prisma";

class MostraTodosProdutoServico {
    async execute() {

        const produto = await prismaClient.produto.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                banner: true,
                categoria_id: true,
            }
        })

        return produto;

    }
}

export {MostraTodosProdutoServico}