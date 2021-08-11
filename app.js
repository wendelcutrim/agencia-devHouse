const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');


//configurando o template egine ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve("views"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);

//subindo o servidor
app.listen(3000, () => console.log("Servidor está funcionando"));
