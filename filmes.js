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

function listar() {
    titulo("- Lista de Filmes -")
    for (var i = 0; i < filme.length; i++) {
        console.log(`${filme[i].padEnd(20)} - ${duracao[i]}min - ${genero[i]}`)
    }
}

function pesqGen() {
    titulo("- Pesquisa por Gênero -")
    var pesq = prompt("Gênero a pesquisar: ")
    var existe = 0
    for (var i = 0; i < genero.length; i++) {
        if (pesq == genero[i]) {
            console.log(`Foi encontrado: ${filme[i]}`)
            existe = 1
        }
    }
    if(existe == 0 ) {
        console.log("Não foi encontrado nenhum filme deste gênero...")
    
    }
    
    function pesqDura() {
        titulo("- Pesquisa por Duração -")
        var pesqd = Number(prompt("Duração: "))
        var existe = 0
        for (var i = 0; i < duracao.length; i++) {
            if (pesqd == duracao[i]) {
                console.log(`Encontrado: ${filme[i]}`)
                existe = 1
            }
        }
        if (existe == 0){
            console.log("Não foi encontrado nenhum filme com esta duração...")
        }
    }
    
    
    function media() {
        titulo("- Média de duração dos Filmes -")
       
        var total = 0
        var num = filmes.length
       
        for (var i=0; i<num; i++) {
        total = total + duracoes[i]
        }
        var media = total / num
        console.log(`Duração Média dos Filmes: ${media.toFixed(1)}`)
        
    
        
    
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