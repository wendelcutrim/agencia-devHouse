const express = require('express');
const routes = express.Router();
const produtosController = require('../controllers/produtosController')


routes.get("/produtos/lista", ()=>{});

module.exports = routes;