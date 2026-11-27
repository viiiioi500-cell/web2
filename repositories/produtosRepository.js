
// Vetor para armazenar os produtos
let produtos = [];

// Gerar IDs automaticamente
let proximoID = 1;


// CADASTRAR PRODUTO
export function cadastrar(dados) {
    const novoProduto = {
        id: proximoID++,
        nome: dados.nome,
        preco: dados.preco,
        quantidade: dados.quantidade
    };

    produtos.push(novoProduto);

    return novoProduto;
}


// LISTAR TODOS OS PRODUTOS
export function listar() {
    return produtos;
}


// BUSCAR PRODUTO PELO ID
export function buscarPorId(id) {
    return produtos.find(p => p.id === id);
}


// ATUALIZAR PRODUTO
export function atualizar(id, dados) {
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return null;
    }

    produtos[indice] = {
        id,
        nome: dados.nome,
        preco: dados.preco,
        quantidade: dados.quantidade
    };

    return produtos[indice];
}


// ATUALIZAR PARCIALMENTE
export function atualizarParcialmente(id, dados) {
    const produto = buscarPorId(id);

    if (!produto) {
        return null;
    }

    Object.assign(produto, dados);

    return produto;
}


// EXCLUIR PRODUTO
export function excluir(id) {
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return false;
    }

    produtos.splice(indice, 1);

    return true;
}
