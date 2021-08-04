const express = require('express');
const routes = express.Router();
const path = require('path');
const depoimentos = require('../models/depoimentos');

routes.get('/', (req,res) => {
    res.render("home", {titulo: "Sua empresa vai ser incrivel!"})
});
/* res.sendFile(path.resolve('views', 'home.html'))); */

routes.get('/home',(req,res)=>res.redirect('/'));

routes.get('/contato',(req,res)=>res.sendFile(path.resolve('views', 'contato.html')));

routes.post('/receber-contato',(req,res)=>{
    console.log(req.body)
    res.send("Contato Recebido")
})

routes.get('/manutencao', (req,res) => res.sendFile(path.resolve('views', 'manutencao.html')));

routes.get('/blog', (req,res) => res.sendFile(path.resolve('views', 'blog.html')));

routes.get('/depoimentos', (req,res)=>{
    res.render("depoimentos", {depoimentos, titulo: "Depoimentos"});
})

module.exports = routes;