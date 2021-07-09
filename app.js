const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname + "/views/home.html")));

app.get('/home',(req,res)=>res.sendFile(path.join(__dirname + "/views/home.html")));

app.get('/contato', (req,res) => res.send('Contatos'));

app.get('/manutencao', (req,res) => res.sendFile(path.join(__dirname + "/views/manutencao.html")));

app.get('/blog', (req,res) => res.sendFile(path.join(__dirname + "/views/blog.html")));

//subindo o servidor
app.listen(3000, () => console.log("Servidor está funcionando"));

//criar arquivo blog