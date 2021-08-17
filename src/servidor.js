const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodeDados = require('./bancodeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',(req, res, next)=>{
    res.send(bancodeDados.getProdutos())//converter para json
})

app.get('/produtos/:id',(req, res, next)=>{
    res.send(bancodeDados.getProduto(req.params.id))
})

/////Post///////////////////////////
app.post('/produtos',(req,res,next)=>{
    const produto = bancodeDados.salvarProduto({
        nome:req.body.name,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})
///////////Alterar/////////////
app.put('/produtos/:id',(req,res,next)=>{
    const produto = bancodeDados.salvarProduto({
        id:req.params.id,
        nome:req.body.name,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})
///////////////////////////////////////////////

///////////Delete/////////////
app.delete('/produtos/:id',(req,res,next)=>{
    const produto = bancodeDados.excluirProduto(req.params.id)
    

    res.send(`produto excluido ${produto}`)//JSON
})
///////////////////////////////////////////////

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}`)
})