
import { Router } from 'express';

import {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    atualizarParcial,
    deletar
} from '../controllers/produtosController.js';

const router = Router();

// POST - Cadastrar produto
router.post('/', cadastrar);

// GET - Listar produtos
router.get('/', listar);

// GET - Buscar produto pelo ID
router.get('/:id', buscarPorId);

// PUT - Atualizar todos os dados
router.put('/:id', atualizar);

// PATCH - Atualizar parcialmente
router.patch('/:id', atualizarParcial);

// DELETE - Excluir produto
router.delete('/:id', deletar);

export default router;
