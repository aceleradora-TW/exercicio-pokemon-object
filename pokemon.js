const upperCase = (frase) => {
  return frase.split(" ").map(palavra => {
    const firstLetter = palavra[0].toUpperCase()
    const restWord = palavra.substr(1).toLowerCase()
    return `${firstLetter}${restWord}`;
  }).join(" ")
}

const atribuirMoves = (moves) =>
  moves.sort((prev, next) => prev.lv - next.lv)
    .map((move) => `    Lv ${move.lv} - ${upperCase(move.name)} `)
    .join("\n");

const mostrarTipos = (types) => types.map((type, index) => {
  return index == (types.length) - 1 ? `${upperCase(type)}` : `${type}/`
}).join("")

const mostrarEvolucoa = (pokemon) => {
  const preEvolution = pokemon.preEvolution ?
    `${upperCase(pokemon.preEvolution)} >> ` : ''
  const evolution = pokemon.evolution ?
    ` >> ${upperCase(pokemon.evolution)}` : ''

  return preEvolution + pokemon.name.toUpperCase() + evolution
}

const printPokemon = pkm => {
  console.log(`  Nome: ${upperCase(pkm.name)} - Tipo: ${mostrarTipos(pkm.types)}
  Habilidade: ${upperCase(pkm.ability)}

  Linha de evolução:
  ${mostrarEvolucoa(pkm)} 

  Atributos:

    HP: ${pkm.attributes.hp}
    ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
    DEF: ${pkm.attributes.defense}  SpDEF: ${pkm.attributes.specialDefense} 
    SPEED: ${pkm.attributes.speed}

  Ataques:

${atribuirMoves(pkm.moves)}`)}

module.exports = { printPokemon }