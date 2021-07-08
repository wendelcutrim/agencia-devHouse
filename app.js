const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req,res) => res.send('Seja bem vindo'));
app.get('/contato', (req,res) => res.send('Contatos'));
app.get('/manutencao', (req,res) => res.sendFile(__dirname + "/views/manutencao.html"));

//subindo o servidor
app.listen(3000, () => console.log("Servidor está funcionando"));
