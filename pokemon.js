const { preEvolution } = require('./db')
const poke = require('./db')

const ordenaLv = (numero) => {
  //let map = numero.map(level =>level.lv)
  //let mapName = numero.map(nome => nome.name)
  let sort = numero.sort((a,b) => a.lv-b.lv)
  return `
    Lv: ${sort[0].lv} - ${sort[0].name}
    Lv: ${sort[1].lv} - ${sort[1].name}
    Lv: ${sort[2].lv} - ${sort[2].nam}
    Lv: ${sort[3].lv} - ${sort[3].name}
  `
}
//console.log(ordenaLv(poke.moves))

const verificaEspaco = (string) => string.indexOf(' ') >= 0;

const primeiraLetraMaiuscula = (nome) => {

  if(verificaEspaco(nome) == true){
    // posicao da primeira letra do segundo nome:
    nome.charAt(nome.length+1) 
  }else{
    return `${nome[0].toUpperCase()}${nome.substring(1)}`
  }
}
console.log(primeiraLetraMaiuscula(poke))


const upperCase = (nome) => nome.toUpperCase()

const printPokemon = pkm => {
  return `  Nome: ${primeiraLetraMaiuscula(pkm.name)} - Tipo: ${primeiraLetraMaiuscula(pkm.types[0])}
  Habilidade: ${primeiraLetraMaiuscula(pkm.ability)}

  Linha de evolução:
    
    ${primeiraLetraMaiuscula(pkm.preEvolution)} >>  ${upperCase(pkm.name)} >> ${primeiraLetraMaiuscula(pkm.evolution)}

  Atributos:

    HP: ${pkm.attributes.hp}
    ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
    DEF: ${pkm.attributes.defense} SpDEF: ${pkm.attributes.specialDefense}
    SPEED: ${pkm.attributes.speed}

  Ataques:
    ${ordenaLv((pkm.moves))}`
  }
//console.log(printPokemon(poke))
module.exports = { printPokemon }