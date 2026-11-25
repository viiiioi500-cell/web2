
// Vetor para armazenar os produtos
let produtos = [];

// Gerar IDs automaticamente
let proximoID = 1;


// CADASTRAR PRODUTO
export function cadastrarProduto(dados) {
    const { nome, preco, quantidade } = dados;

    const novoProduto = {
        id: proximoID++,
        nome,
        preco,
        quantidade
    };

    produtos.push(novoProduto);

    return novoProduto;
}


// LISTAR TODOS OS PRODUTOS
export function listarProdutos() {
    return produtos;
}


// BUSCAR PRODUTO PELO ID
export function buscarProdutoPorId(id) {
    return produtos.find(p => p.id === id);
}


// ATUALIZAR TODOS OS DADOS (PUT)
export function atualizarProduto(id, dados) {
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


// ATUALIZAR PARCIALMENTE (PATCH)
export function atualizarParcialmente(id, dados) {
    const produto = buscarProdutoPorId(id);

    if (!produto) {
        return null;
    }

    const { nome, preco, quantidade } = dados;

    if (nome !== undefined) produto.nome = nome;
    if (preco !== undefined) produto.preco = preco;
    if (quantidade !== undefined) produto.quantidade = quantidade;

    return produto;
}


// EXCLUIR PRODUTO
export function excluirProduto(id) {
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return false;
    }

    produtos.splice(indice, 1);

    return true;
}
