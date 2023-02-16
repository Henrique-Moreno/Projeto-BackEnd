import prismaClient from "../../prisma";

interface EditarResquest {
    id: string;
    name: string;
    price: string;
}

class EditarProdutoService {
    async execute({id, name, price}: EditarResquest) {
        const produto = await prismaClient.produto.update({
            where: {
                id: id
            },
            data: {
                name: name,
                price: price
            }
        })

        return produto;
    }
}

export { EditarProdutoService }