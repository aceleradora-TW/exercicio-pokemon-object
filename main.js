let teste = require("./db")

function pikachu(pokemon) {
    // let nome = pokemon.name
    // let tipo = pokemon.types[0]
    // let habilidade = pokemon.ability
    console.log(`nome: ${pokemon.name} - Tipo: ${pokemon.types[0]}\nHabilidade: ${pokemon.ability}\n
Linha de Evolução:
${pokemon.preEvolution} >> ${pokemon.name.toUpperCase()} >> ${pokemon.evolution}`)
}
// console.log(pikachu(pokemon).lenght())
console.log(pikachu(teste))

// console.log("nome: " + pokemon.name + "  " + " tipo: " + pokemon.types[0])
// console.log("habilidade: " + pokemon.ability)
// console.log("")
// console.log("Linha de Evolução:")
// console.log(pokemon.preEvolution + " > " + pokemon.name.toUpperCase() + " > " + pokemon.evolution)

// let i = 0
// for (let key in pokemon) {
    //     i++
    //     let nome = pokemon.name
    // if (key == tipo) {
        //     return tipo
        // }
