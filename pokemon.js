const { preEvolution } = require('./db')
const poke = require('./db')

const ordenaLv = (numero) => {
  let map = numero.map(level => level.lv)
  return `${map.sort((a,b) => a-b)} - ${numero.name}`
}

console.log(ordenaLv(poke.moves))

const primeiraLetraMaiuscula = (nome) => `${nome[0].toUpperCase()}${nome.substring(1)}`
const upperCase = (nome) => nome.toUpperCase()

const printPokemon = pkm => {
  console.log(`  Nome: ${primeiraLetraMaiuscula(pkm.name)} - Tipo: ${primeiraLetraMaiuscula(pkm.types[0])}
  Habilidade: ${primeiraLetraMaiuscula(pkm.ability)}

  Linha de evolução:
    
    ${primeiraLetraMaiuscula(pkm.preEvolution)} >>  ${upperCase(pkm.name)} >> ${primeiraLetraMaiuscula(pkm.evolution)}

  Atributos:

    HP: ${pkm.attributes.hp}
    ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
    DEF: ${pkm.attributes.defense} SpDEF: ${pkm.attributes.specialDefense}
    SPEED: ${pkm.attributes.speed}

  Ataques:
    Lv ${pkm.moves[0].lv} - Tackle
    Lv 9 - Thunder Wave
    Lv 20 - Thunderbolt
    Lv 50 - Thunder`)
}
//console.log(printPokemon(poke))
module.exports = { printPokemon }