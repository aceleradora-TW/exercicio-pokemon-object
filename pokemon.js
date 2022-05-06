const { preEvolution } = require('./db')
const pokemon = require('./db')

function getEvolutionLine(pkm){
  const preEvolution = capitalize(pkm.preEvolution)
  const name = pkm.name.toUpperCase()
  const evolution = capitalize(pkm.evolution)
  let evolutionLine = [preEvolution, name, evolution]
  
  return evolutionLine.join(" >> ")
}

function capitalize(str){
  if (typeof str !== 'string') {
  return '';
  } 
  let words= str.split(" ")
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return words.join(" ")
}

function ordenaAtaque( moveX, moveY ){
 return  moveX.lv - moveY.lv 
}

function formataAtaque(move){
  const attack = ' Lv ' + move.lv + ' - ' + capitalize(move.name) + " "
  return attack
}

function printarPokemon(pkm){
  const name = capitalize(pkm.name)
  const types = capitalize(pkm.types[0])
  const ability = capitalize(pkm.ability)
  const evolutionLine = getEvolutionLine(pkm)
  const attackList = pkm.moves.sort(ordenaAtaque)
  const formatAttackList = attackList.map(formataAtaque)

  const printPokemon = `  Nome: ${name} - Tipo: ${types}
  Habilidade: ${ability}

  Linha de evolução:
  ${evolutionLine}
  
  Atributos:
  
  HP: ${pkm.attributes.hp}
  ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
  DEF: ${pkm.attributes.defense} SpDEF: ${pkm.attributes.specialDefense}
  SPEED: ${pkm.attributes.speed}
  
  
  Ataques: 
 ${formatAttackList.join("\n ")}`

  console.log(printPokemon)

}

module.exports = { printarPokemon }