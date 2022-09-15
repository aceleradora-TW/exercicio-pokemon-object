const upeerFirst = (palavra) => palavra[0].toUpperCase() + palavra.substr(1)

const printPokemon = pkm => {
  console.log(`  Nome: ${upeerFirst(pkm.name)} - Tipo: ${upeerFirst(pkm.types[0])}
  Habilidade: ${upeerFirst(pkm.ability)}

  Linha de evolução:
  ${upeerFirst(pkm.preEvolution)} >> ${(pkm.name).toUpperCase()}  >> ${upeerFirst(pkm.evolution)} 

  Atributos:

    HP: ${pkm.attributes.hp}
    ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
    DEF: ${pkm.attributes.defense}  SpDEF: ${pkm.attributes.specialDefense} 
    SPEED: ${pkm.attributes.speed}

  Ataques:
    Lv ${pkm.moves[0].lv} - ${upeerFirst(pkm.moves[0].name)}
    Lv ${pkm.moves[1].lv} - ${upeerFirst(pkm.moves[1].name)}
    Lv ${pkm.moves[2].lv} - ${upeerFirst(pkm.moves[2].name)}
    Lv ${pkm.moves[3].lv} - ${upeerFirst(pkm.moves[3].name)}`
)   
} 

module.exports = { printPokemon }