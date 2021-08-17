const sequence = {
    _id:1,//A id vai começar com 1
    get id(){
        return this._id++ // retornando a id incrementando
    }
}

const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto

}

function getProduto(id){
    return produtos[id] ||{}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
module.exports = { salvarProduto,getProduto,getProdutos, excluirProduto}
