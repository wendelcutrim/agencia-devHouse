const express = require('express');
const routes = express.Router();
const produtosController = require('../controllers/produtosController')


routes.get("/admin/cadastroProdutos", produtosController.cadastrarProdutos);

routes.get("/admin/produtos", produtosController.listarProdutosAdmin);


module.exports = routes;