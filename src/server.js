const door = 3003
const express = require('express')
const app = express()
const database = require('./database')

app.get('/products', (requisicao, resposta, next) => {

    resposta.send({ 
        nome: 'Pastel',
        preco: 2.50
    })
})

app.get('/products/:id', (requisicao, resposta, next) => {
    resposta.send(database.getProductById(requisicao.params.id))

})

app.post('/products', (requisicao, resposta, next) => {

    const product = database.saveProduct({
        nome: requisicao.body.name,
        preco: requisicao.body.preco
    })

    resposta.send(product)

})

app.listen(door, () => {
    console.log(`Este servidor está sendo executado na porta ${door}`)
})

app.post('/products', (requisicao, resposta, next) => {

    const products = database.getAllProducts({

        all: requisicao.body
    })

    resposta.sen(product)
})