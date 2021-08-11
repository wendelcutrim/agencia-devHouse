const path = require('path');
const modelDepoimentos = require('../models/depoimentos');

const indexController = {
    index: (req, res) => {
        res.render("home", {
            titulo: "Sua empresa vai ser incrivel!"
        })
    },
    redirectHome: (req, res) => {
        res.redirect('/');
    },

    viewContato: (req, res) => {
        res.render('contato');
    },

    receberContato: (req, res) => {
        console.log(req.body)
        res.render("Contato Recebido");
    },

    viewManutencao: (req, res) => res.render(path.resolve('views', 'manutencao')),

    viewBlog: (req, res) => res.render(path.resolve('views', 'blog')),

    exibirDepoimentos: (req, res) => {
        res.render("depoimentos", {
            depoimentos: modelDepoimentos.depoimentos,
            titulo: "Depoimentos",
        });
    },

    exibirFormDepoimento: (req, res) => {
        res.render('cadastro-depoimento');
    },

    cadastrarDepoimentos: (req, res) => {
        console.log(req.body);
        const {
            autor,
            titulo,
            descricao
        } = req.body;

        modelDepoimentos.cadastrarDepoimento(autor, titulo, descricao);
        return res.redirect('/depoimentos');
    },
}

module.exports = indexController;