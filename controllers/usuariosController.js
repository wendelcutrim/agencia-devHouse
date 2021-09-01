const { buscarUsuarioPorEmail, listaDeUsuarios } = require("../models/usuariosModel");
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
  },

  autenticacaoLogin(req,res) {
    const {
      email,
      senha
    } = req.body;
    console.log(req.body);

    const validarEmail = usuarioModel.buscarUsuarioPorEmail(email);

    if(validarEmail == false || validarEmail.senha != senha) {
      res.render("login", {
        error: "Usuário não existe ou senha está errada!"
      });
    }else{
        res.redirect("/admin/produtos");
    }
  }

};

module.exports = usuarioController;
