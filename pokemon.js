const upeerFirst = (palavra) => palavra[0].toUpperCase() + palavra.substr(1);

const atribuirMoves = (moves) => 
    moves.sort((prev, next) => prev.lv-next.lv )
        .map((move) => `    Lv ${move.lv} - ${upeerFirst(move.name)} `)
        .join("\n");

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

${atribuirMoves(pkm.moves)}

  `
)   
} 

module.exports = { printPokemon }