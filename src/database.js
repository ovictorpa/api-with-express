const sequence = {

    _id: 1,
    get id() { return this._id++}
}

const products = {}

function salvarProduto(product){
    if(!product.id) product.id = sequence.id
    products[product.id] = product
    return product
}

function getProduto(id) {

    return products[id] || {}
}

function getProdutos() {

    return Object.values(products)
}

module.exports = { salvarProduto, getProduto, getProdutos}

