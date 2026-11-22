
import express from 'express';

import produtosRoutes from './routes/produtosRoutes.js';

const app = express();

// Permitir receber dados em JSON
app.use(express.json());

// Conectar as rotas de produtos
app.use('/produtos', produtosRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.send('<h2>Bem-vindo à API do Victhor!</h2>');
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
