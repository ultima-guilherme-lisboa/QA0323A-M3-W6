import ListaProdutos from "./lista-produtos"

export default class CrossSell {


    abrirCrossSell () {
        let produto = ListaProdutos.getProduto(1)

        console.log("Com base na categoria encontra outros produtos")
    }

}
