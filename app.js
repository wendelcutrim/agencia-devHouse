const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);

/* app.get('/', (req,res) => res.sendFile(path.join(__dirname + "/views/home.html")));

app.get('/home',(req,res)=>res.sendFile(path.join(__dirname + "/views/home.html")));

app.get('/contato',(req,res)=>res.sendFile(path.join(__dirname + "/views/contato.html")));

app.post('/receber-contato',(req,res)=>{
    console.log(req.body)
    res.send("Contato Recebido")
})

app.get('/manutencao', (req,res) => res.sendFile(path.join(__dirname + "/views/manutencao.html")));

app.get('/blog', (req,res) => res.sendFile(path.join(__dirname + "/views/blog.html"))); */

//subindo o servidor
app.listen(3000, () => console.log("Servidor está funcionando"));
