const express = require('express');
const routes = express.Router();
const produtosController = require('../controllers/produtosController');
const upload = require('../middlewares/uploads');

routes.get("/admin/cadastroProdutos", produtosController.verPaginaCadastroDeProdutosAdmin);
routes.post("/admin/cadastroProdutos", upload.single("imagem"),produtosController.cadastrarProdutosAdmin);

routes.get("/admin/produtos", produtosController.listarProdutosAdmin);
routes.delete("/deletar-produto/:id", produtosController.deletarProduto);

module.exports = routes;