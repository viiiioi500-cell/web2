
import * as produtoService from '../services/produtosService.js';

// CADASTRAR PRODUTO
export function cadastrarProduto(req, res) {
    const { nome, preco, quantidade } = req.body;

    if (!nome || preco == null || quantidade == null) {
        return res.status(400).json({
            erro: 'Preencha todos os campos obrigatórios!'
        });
    }

    const novoProduto = produtoService.cadastrarProduto(req.body);

    return res.status(201).json(novoProduto);
}


// LISTAR PRODUTOS
export function listarProdutos(req, res) {
    const produtos = produtoService.listarProdutos();

    return res.json(produtos);
}


// BUSCAR PRODUTO PELO ID
export function buscarProduto(req, res) {
    const id = Number(req.params.id);

    const produto = produtoService.buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado!'
        });
    }

    return res.json(produto);
}


// ATUALIZAR TODOS OS DADOS (PUT)
export function atualizarProduto(req, res) {
    const id = Number(req.params.id);

    const produto = produtoService.atualizarProduto(id, req.body);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado!'
        });
    }

    return res.json(produto);
}


// ATUALIZAR PARCIALMENTE (PATCH)
export function atualizarParcialmente(req, res) {
    const id = Number(req.params.id);

    const produto = produtoService.atualizarParcialmente(id, req.body);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado!'
        });
    }

    return res.json(produto);
}


// EXCLUIR PRODUTO
export function excluirProduto(req, res) {
    const id = Number(req.params.id);

    const excluido = produtoService.excluirProduto(id);

    if (!excluido) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado!'
        });
    }

    return res.json({
        mensagem: 'Produto excluído com sucesso!'
    });
}
