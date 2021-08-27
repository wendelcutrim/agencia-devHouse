/* const { depoimentos } = require("./depoimentos"); */
const {
    v4: uuidv4
} = require('uuid');

const produtoJson = require('../database/produtos.json');
const fs = require('fs');
const path = require('path');


const produtoModel = {

    listaDeProdutos: produtoJson,

    cadastrarProduto: function (nome, descricao, imagem) {
        const novoProduto = {
            id: uuidv4(),
            nome,
            descricao,
            imagem,
        }
        
        this.listaDeProdutos.push(novoProduto);
        this.atualizaJson();
    },

    excluirProduto: function (id) {
        console.log("O produto selecionado para exluir foi: " + id);
        let novaListaDeProdutos = this.listaDeProdutos.filter((produto) => produto.id !== id);
        if (novaListaDeProdutos.length == this.listaDeProdutos.length) {
            return false;
        }

        this.listaDeProdutos = novaListaDeProdutos;
        this.atualizaJson();
        return true;

    },

    atualizaJson() {
        const listaEmJson = JSON.stringify(this.listaDeProdutos);
        fs.writeFileSync(path.resolve("database", "produtos.json"), listaEmJson);
    }
};

module.exports = produtoModel;