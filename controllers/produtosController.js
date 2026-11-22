
// Vetor para armazenar os produtos
let produtos = [];

// Gerar IDs automaticamente
let proximoID = 1;


// CADASTRAR PRODUTO
export function cadastrar(req, res) {
    const { nome, preco, quantidade } = req.body;

    if (!nome || preco == null || quantidade == null) {
        return res.status(400).json({
            erro: "Preencha todos os campos obrigatórios"
        });
    }

    const novoProduto = {
        id: proximoID++,
        nome,
        preco,
        quantidade
    };

    produtos.push(novoProduto);

    return res.status(201).json(novoProduto);
}


// LISTAR TODOS OS PRODUTOS
export function listar(req, res) {
    return res.status(200).json(produtos);
}


// BUSCAR PRODUTO PELO ID
export function buscarPorId(req, res) {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado!"
        });
    }

    return res.status(200).json(produto);
}


// ATUALIZAR TODOS OS DADOS (PUT)
export function atualizar(req, res) {
    const id = Number(req.params.id);

    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado!"
        });
    }

    const { nome, preco, quantidade } = req.body;

    if (!nome || preco == null || quantidade == null) {
        return res.status(400).json({
            erro: "Informe todos os campos para atualizar"
        });
    }

    produtos[indice] = {
        id,
        nome,
        preco,
        quantidade
    };

    return res.status(200).json(produtos[indice]);
}


// ATUALIZAR PARCIALMENTE (PATCH)
export function atualizarParcial(req, res) {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado!"
        });
    }

    const { nome, preco, quantidade } = req.body;

    if (nome === undefined &&
        preco === undefined &&
        quantidade === undefined) {
        return res.status(400).json({
            erro: "Informe pelo menos um campo para atualizar"
        });
    }

    if (nome !== undefined) produto.nome = nome;
    if (preco !== undefined) produto.preco = preco;
    if (quantidade !== undefined) produto.quantidade = quantidade;

    return res.status(200).json(produto);
}


// EXCLUIR PRODUTO
export function deletar(req, res) {
    const id = Number(req.params.id);

    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado!"
        });
    }

    produtos.splice(indice, 1);

    return res.status(200).json({
        mensagem: "Produto excluído com sucesso!"
    });
}
