const { preEvolution } = require('./db')
const pokemon = require('./db')

function buscaLinhaDeEvolucao(pkm){
  const preEvolution = formataPrimeiraLetra(pkm.preEvolution)
  const name = pkm.name.toUpperCase()
  const evolution = formataPrimeiraLetra(pkm.evolution)
  let linhaDeEvolucao = [preEvolution, name, evolution]
  
  return linhaDeEvolucao.join(" >> ")

}

function formataPrimeiraLetra(str){
  if (typeof str !== 'string') {
  return '';
}
return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function ordenaAtaque( x, y )
{
 return  x.lv - y.lv 
}

function printarPokemon(pkm){
  const name = formataPrimeiraLetra(pkm.name)
  const types = formataPrimeiraLetra(pkm.types[0])
  const ability = formataPrimeiraLetra(pkm.ability)
  const retornoLinhaDeEvolucao = buscaLinhaDeEvolucao(pkm)
  const ataques = pkm.moves.sort(ordenaAtaque)
  console.log(pkm)

  const printPokemon = `  Nome: ${name} - Tipo: ${types}
  Habilidade: ${ability}

  Linha de evolução:
  ${retornoLinhaDeEvolucao}
  
  Atributos:
  
  HP: ${pkm.attributes.hp}
  ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
  DEF: ${pkm.attributes.defense} SpDEF: ${pkm.attributes.specialDefense}
  SPEED: ${pkm.attributes.speed}
  
  
  Ataques: 

  ${ataques}
  
  `

  console.log(printPokemon)

}

module.exports = { printarPokemon }