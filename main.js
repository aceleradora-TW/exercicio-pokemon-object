let teste = require("./db")
function pikachu(pokemon) {
    let nome = pokemon.name
    let tipo = pokemon.types[0]
    let habilidade = pokemon.ability
    return habilidade
}

console.log(pikachu(teste))