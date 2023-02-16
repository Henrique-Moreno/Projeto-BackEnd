import prismaClient from "../../prisma";

interface ProdutoSolitar {
    name: string;
    price: string;
    banner: string;
    categoria_id: string;
}

class CriarProdutoServico {
    async execute({name, price, banner, categoria_id}: ProdutoSolitar) {

        const produto = await prismaClient.produto.create({
            data: {
                name: name,
                price: price,
                banner: banner,
                categoria_id: categoria_id,
            }
        })

        return produto;

    }
}

export {CriarProdutoServico}