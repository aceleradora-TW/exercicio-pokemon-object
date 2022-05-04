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
  let palavras= str.split(" ")
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1)
  }
  return palavras.join(" ")
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

 Lv ${ataques[0].lv} - ${formataPrimeiraLetra(ataques[0].name)}
 Lv ${ataques[1].lv} - ${formataPrimeiraLetra(ataques[1].name)}
 Lv ${ataques[2].lv} - ${formataPrimeiraLetra(ataques[2].name)}
 Lv ${ataques[3].lv} - ${formataPrimeiraLetra(ataques[3].name)}
  `

  console.log(printPokemon)

}

module.exports = { printarPokemon }