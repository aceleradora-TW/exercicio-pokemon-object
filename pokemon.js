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

const printPokemon = pkm => {
  console.log(`  Nome: ${upperCase(pkm.name)} - Tipo: ${upperCase(pkm.types[0])}
  Habilidade: ${upperCase(pkm.ability)}

  Linha de evolução:
  ${upperCase(pkm.preEvolution)} >> ${(pkm.name).toUpperCase()}  >> ${upperCase(pkm.evolution)} 

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