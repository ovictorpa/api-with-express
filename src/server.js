const door = 3003
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const database = require('./database')

app.use(bodyparser.urlencoded({ extended: true }))

app.get('/products', (req, res) => {

    res.send(database.getAllProducts())

})

app.get('/products/:id', (req, res) => {

    res.send(database.getProductById(req.params.id))

})

app.post('/products', (req, res) => {

    const product = database.saveProduct({

        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(product)

})

app.put('/products/:id', (req, res) => {

    const product = database.saveProduct({

        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(product)

})

app.delete('/products/:id', (req, res) => {

    const product = database.deleteProduct(req.params.id)
    res.send(product)

})

app.listen(door, () => {
    console.log(`Este servidor está sendo executado na porta ${door}`)
})

