const express = require('express');
const routes = express.Router();
const indexController = require('../controllers/indexController');

routes.get('/', indexController.index);

routes.get('/home', indexController.redirectHome);

routes.get('/contato', indexController.viewContato);

routes.post('/receber-contato', indexController.receberContato);

routes.get('/manutencao', indexController.viewManutencao);

routes.get('/blog', indexController.viewBlog);

routes.get('/depoimentos', indexController.exibirDepoimentos);

routes.get('/cadastrar-depoimento', indexController.exibirFormDepoimento);
routes.post('/cadastrar-depoimento', indexController.cadastrarDepoimentos);

module.exports = routes;