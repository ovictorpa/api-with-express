const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const product = {

    

}

function saveProduct(products) {
    if(!product.id) product.id = sequence.id
    products[product.id] = products
    return products
}

function getProductById(id){
    return product[id] || {}
}

function getAllProducts(){
    return Object.values(product)
}

module.exports = { saveProduct, getProductById, getAllProducts}