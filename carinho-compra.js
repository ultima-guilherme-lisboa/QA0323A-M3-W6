import ListaProdutos from "./lista-produtos"

export default class CarrinhoCompra {


    abrirCarrinhoCompra () {
        console.log("Abre o carrinho")
    }

    addProduto () {
        let dadosProduto =  ListaProdutos.getProduto()
        console.log("Adiciona produto")
    }

    removeProduto () {
        let dadosProduto =  ListaProdutos.getProduto()
        console.log("Adiciona produto")
    }

    checkout () {
        let dadosProduto =  ListaProdutos.getProduto()
        console.log("Faz checkout")
    }
}
