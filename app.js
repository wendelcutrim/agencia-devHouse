const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override')
const routes = require('./routes');
const rotasDeProdutos = require('./routes/produtos');
const usuarioRotas = require('./routes/usuariosRotas');



//configurando o template egine ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve("views"));

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//Rotas
app.use(routes);
app.use(rotasDeProdutos);
app.use(usuarioRotas);

//Errors Route Response
app.use((req, res, next) => {
    res.status(404).render('not-found');
});

//subindo o servidor
app.listen(port, () => console.log(`O servidor está rodando na porta: ${port}🚀`));
