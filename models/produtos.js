/* const { depoimentos } = require("./depoimentos"); */
const {
    v4: uuidv4
} = require('uuid');

const produtoModel = {

    listaDeProdutos: [],

    cadastrarProduto: function (nome, descricao, imagem) {
        const novoProduto = {
            id: uuidv4(),
            nome,
            descricao,
            imagem,
        };

        return this.listaDeProdutos.push(novoProduto);
    },

    excluirProduto: function (id) {
        console.log("O produto selecionado para exluir foi: " + id);
        let novaListaDeProdutos = this.listaDeProdutos.filter((produto) => produto.id !== id);
        if (novaListaDeProdutos.length == this.listaDeProdutos.length) {
            return false;
        }

        this.listaDeProdutos = novaListaDeProdutos;
        return true;

    },
};

module.exports = produtoModel;