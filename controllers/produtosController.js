const produtoModel = require('../models/produtos');
const produtosController = {
    listarProdutos: (req,res)=>{
        res.send("Página de produtos");
    },

    listarProdutosAdmin: (req,res) =>{
        res.render("admin/produtos", { produtos: produtoModel.listaDeProdutos });
        
    },

    verPaginaCadastroDeProdutosAdmin: (req,res) => {
        res.render("admin/cadastroProdutos");
    },

    cadastrarProdutosAdmin: (req, res) =>{
        /* console.log(req.body); */
        console.log(req.file);
        const {
            nome,
            descricao,
            imagem,
        } = req.body;
        produtoModel.cadastrarProduto(nome, descricao, req.file.filename);
        console.log(produtoModel.listaDeProdutos);
        return res.redirect("/admin/produtos");
    },

    deletarProduto: (req,res) =>{
        let {id} = req.params;
        const resultado = produtoModel.excluirProduto(id);
        if (!resultado){
            res.send("Produto não localizado")
        }
        res.redirect("/admin/produtos");
    },
}

module.exports = produtosController;