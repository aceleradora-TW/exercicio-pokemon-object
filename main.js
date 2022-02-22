let teste = require("./db")
function pikachu(pokemon) {
    let ataques = pokemon.moves.sort(function (a, b) {
        return a.lv - b.lv
    })
    console.log(ataques)

    return (`Nome: ${(pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1)} - Tipo: ${(pokemon.types[0]).charAt(0).toUpperCase() + (pokemon.types[0]).slice(1)}\nHabilidade: ${pokemon.ability.charAt(0).toUpperCase() + (pokemon.ability).slice(1)}\n
    Linha de Evolução:
    ${pokemon.preEvolution.charAt(0).toUpperCase() + (pokemon.preEvolution).slice(1)} >> ${pokemon.name.toUpperCase()} >> ${pokemon.evolution.charAt(0).toUpperCase() + (pokemon.evolution).slice(1)}\n
    Atributos:\n
    HP: ${pokemon.attributes.hp}
    ATK: ${pokemon.attributes.attack} SpATK: ${pokemon.attributes.specialAttack}
    DEF: ${pokemon.attributes.defense} SpDEF: ${pokemon.attributes.specialDefense}
    SPEED: ${pokemon.attributes.speed}\n
    Ataques:
    Lv ${ataques[0].lv} - ${ataques[0].name}
    Lv ${ataques[1].lv} - ${ataques[1].name}
    Lv ${ataques[2].lv} - ${ataques[2].name}
    Lv ${ataques[3].lv} - ${ataques[3].name}`

    )
}
// Lv 5 -  ${pokemon.moves[0].name.charAt(0).toUpperCase() + (pokemon.moves[0].name).slice(1)}
// Lv 9 -  ${pokemon.moves[3].name.charAt(0).toUpperCase() + (pokemon.moves[3].name).slice(1)}
// Lv 20 - ${pokemon.moves[1].name.charAt(0).toUpperCase() + (pokemon.moves[1].name).slice(1)}
// Lv 50 -  ${pokemon.moves[2].name.charAt(0).toUpperCase() + (pokemon.moves[2].name).slice(1)})
// console.log(pikachu(pokemon).lenght())
console.log(pikachu(teste))
// console.log(Object.entries(teste))

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

// let nome = pokemon.name
// let tipo = pokemon.types[0]
// let habilidade = pokemon.ability