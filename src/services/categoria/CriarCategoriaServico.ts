import prismaClient from "../../prisma";

interface CategoriaSolitar {
    name: string;
}

class CriarCategoriaServico {
    async execute({name}: CategoriaSolitar) {

        if(name === ''){
            throw new Error("Nome invalido")
        }

        const categoria = await prismaClient.categoria.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
            }
        })
        return categoria;
    }
}

export {CriarCategoriaServico}