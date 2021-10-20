var prompt = require("prompt-sync")()

var filme = []
var duracao = []
var genero = []

function titulo(texto) {
    console.log()
    console.log(texto)
    console.log("-".repeat(40))
}

function incluir() {
    titulo("- Inclusão de Filmes -")

    filme.push(prompt("Título do Filme: "))
    duracao.push(Number(prompt("Duração do Filme(min): ")))
    genero.push(prompt("Gênero do Filme: "))


}


do {
    titulo("- Menu Principal -")
    console.log("1. Incluir Filmes")
    console.log("2. Listar filmes")
    console.log("3. Pesquisar por Gênero")
    console.log("4. Pesquisar por Duração")
    console.log("5. Duração média dos Filmes")
    console.log("6. Finalizar")

    var opcao = Number(prompt("Opção: "))
    if (opcao == 1) {

        incluir()

    }
    else if (opcao == 2) {
        listar()

    }
    else if (opcao == 3) {
        pesqGen()

     }
    else if (opcao == 4){
        pesqDura()

    }
    else if (opcao == 5){
        media()

    } 
    else {
            break
        }

    } while (true)