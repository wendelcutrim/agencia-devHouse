/* const { depoimentos } = require("./depoimentos"); */
const { v4: uuidv4 } = require('uuid');

let listaDeProdutos = [{
    id: uuidv4(),
    nome: "Site",
    descricao: "Tenha o site dos seus sonhos",
    imagem: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/11/Como-Criar-um-Site.png",
}]

function cadastrarProduto (nome, descricao, imagem) {
    const novoProduto = {
        id: uuidv4(),
        nome,
        descricao,
        imagem,
    };

    return listaDeProdutos.push(novoProduto);
}

function deletarProduto (id) {
    const novaListaDeProdutos = listaDeProdutos.filter((produto) => produto.id != id);

    if(novaListaDeProdutos.length == listaDeProdutos.length){
        return false;
    }

    listaDeProdutos = novaListaDeProdutos;
    return true;

}

module.exports = { listaDeProdutos, cadastrarProduto, deletarProduto };