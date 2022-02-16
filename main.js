let teste = require("./db")
function pikachu(pokemon) {
    console.log("nome: " + pokemon.name + "  " + " tipo: " + pokemon.types[0])
    console.log("habilidade: " + pokemon.ability)
    console.log("")
    console.log("Linha de Evolução:")
    console.log(pokemon.preEvolution + " > " + pokemon.name.toUpperCase() + " > " + pokemon.evolution)
    return
}

console.log(pikachu(teste))