import * as proRepository from '../repositories/produtosRepository.js';


// CADASTRAR PRODUTO
export function cadastrarProduto(dados) {
    return proRepository.cadastrar(dados);
}


// LISTAR TODOS OS PRODUTOS
export function listarProdutos() {
    return proRepository.listar();
}


// BUSCAR PRODUTO PELO ID
export function buscarProdutoPorId(id) {
    return proRepository.buscarPorId(id);
}


// ATUALIZAR TODOS OS DADOS (PUT)
export function atualizarProduto(id, dados) {
    return proRepository.atualizar(id, dados);
}


// ATUALIZAR PARCIALMENTE (PATCH)
export function atualizarParcialmente(id, dados) {
    return proRepository.atualizarParcialmente(id, dados);
}


// EXCLUIR PRODUTO
export function excluirProduto(id) {
    return proRepository.excluir(id);
}
