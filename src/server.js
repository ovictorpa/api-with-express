const door = 3003
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const database = require('./database')

app.use(bodyparser.urlencoded({ extended: true }))

app.get('/products', (requisicao, resposta, next) => {

    resposta.send(database.getProdutos())

})

app.get('/products/:id', (requisicao, resposta, next) => {

    resposta.send(database.getProduto(red.params.id))

})

app.post('/products', (requisicao, resposta, next) => {

    const product = database.salvarProduto({

        nome: requisicao.body.nome,
        preco: requisicao.body.preco,
        tipo: requisicao.body.tipo
    })

    resposta.send(product)

})

app.listen(door, () => {
    console.log(`Este servidor está sendo executado na porta ${door}`)
})

