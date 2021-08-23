const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const routes = require('./routes');
const rotasDeProdutos = require('./routes/produtos');


//configurando o template egine ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve("views"));

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);
app.use(rotasDeProdutos);

//subindo o servidor
app.listen(3000, () => console.log("Servidor está funcionando"));
