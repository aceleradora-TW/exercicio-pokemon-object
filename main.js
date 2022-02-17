let teste = require("./db")
function pikachu(pokemon) {
    let i = 0
    for (let key in pokemon) {
        i++
        let nome = pokemon.name
        if (key == pokemon) {
            return nome
        }
        // if (key == tipo) {
        //     return tipo
        // }
    }
}
// console.log(pikachu(pokemon).lenght())
console.log(pikachu(teste))

// console.log("nome: " + pokemon.name + "  " + " tipo: " + pokemon.types[0])
// console.log("habilidade: " + pokemon.ability)
// console.log("")
// console.log("Linha de Evolução:")
// console.log(pokemon.preEvolution + " > " + pokemon.name.toUpperCase() + " > " + pokemon.evolution)

