const pokemon = require("./db");
let teste = require("./db")
function pikachu(pokemon) {

    for (let i = 0; i != pokemon.lenght; i++)
        result[i] = f(pokemon[i]);

    return result
}
console.log(pikachu(pokemon).lenght())
console.log(pikachu(teste))

// console.log("nome: " + pokemon.name + "  " + " tipo: " + pokemon.types[0])
// console.log("habilidade: " + pokemon.ability)
// console.log("")
// console.log("Linha de Evolução:")
// console.log(pokemon.preEvolution + " > " + pokemon.name.toUpperCase() + " > " + pokemon.evolution)

