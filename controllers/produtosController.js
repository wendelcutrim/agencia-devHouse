const produtoModel = require('../models/produtos');
const produtosController = {
    listarProdutos: (req,res)=>{
        res.send("Página de produtos");
    },

    listarProdutosAdmin: (req,res) =>{
        res.render("admin/produtos");
    },

    cadastrarProdutos: (req,res) => {
        res.render("admin/cadastroProdutos");
    },

}

module.exports = produtosController;