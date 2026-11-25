
import { Router } from 'express';

import {
    cadastrarProduto,
    listarProdutos,
    buscarProduto,
    atualizarProduto,
    atualizarParcialmente,
    excluirProduto
} from '../controllers/produtosController.js';

const router = Router();

// POST - Cadastrar produto
router.post('/', cadastrarProduto);

// GET - Listar produtos
router.get('/', listarProdutos);

// GET - Buscar produto pelo ID
router.get('/:id', buscarProduto);

// PUT - Atualizar todos os dados
router.put('/:id', atualizarProduto);

// PATCH - Atualizar parcialmente
router.patch('/:id', atualizarParcialmente);

// DELETE - Excluir produto
router.delete('/:id', excluirProduto);

export default router;

