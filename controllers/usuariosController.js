const usuarioModel = require("../models/usuariosModel");

const usuarioController = {
  exibirLogin(req, res) {
    return res.render("login");
  },

  exibirCadastro(req, res) {
    return res.render("cadastro");
  },
  
  salvarUsuario(req,res){
    console.log(req.body);
    const {
      nome,
      email,
      senha,
    } = req.body;
    usuarioModel.cadastrarUsuario(nome, email, senha)
    return res.redirect("login");
  }

};

module.exports = usuarioController;
