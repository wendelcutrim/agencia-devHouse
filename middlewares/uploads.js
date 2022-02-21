const multer = require('multer');
const path = require('path');
const { v4: gerarNomeAleatorio } = require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //Passando o caminho para onde os uploads serão salvos.
      cb(null, path.resolve("public", "uploads"));
    },
    filename: function (req, file, cb) {
        //Reconhecendo o formato do arquivo.
        const extensao = file.originalname.split('.').pop();
        const nomeArquivo = `${gerarNomeAleatorio()}.${extensao}`;
        //Acima está utilizando template string, onde tudo que está dentro das crases, será transformado em string, para inserir uma variável, basta colocar o nome da váriavel no seguinte formato: ${varName}. Outro método seria: const nomeArquivo = gerarNomeAletoario() + '.' + extensao

        cb(null, nomeArquivo);
    },
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;