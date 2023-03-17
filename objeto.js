const pkm = require('./db')

const letraMaiuscula = (nome)=>(nome.name[0].toUpperCase() + nome.name.slice(3,6))

const maisculas = (palavra)=>(palavra[0].toUpperCase() + palavra.slice(1))

const up = (pkm)=>(pkm.toUpperCase())

const tipoPokemon = (poder,tipo)=>(poder.types.find(pkm => 
  pkm === tipo).charAt(0).toUpperCase() + tipo.slice(1))

const ordenar = (ataques)=> (ataques.moves.sort((a,b) => a.lv - b.lv).map(pkm => 
  `lv: ${pkm.lv} - name: ${maisculas(pkm.name)}
 `).join(" "))

const impressao =  `Nome: ${letraMaiuscula(pkm)} - Tipo: ${tipoPokemon(pkm,"eletric")}
Habilidade: ${maisculas(pkm.ability)}

Linha de evolução:
  ${maisculas(pkm.preEvolution)} >> ${up(letraMaiuscula(pkm))} >> ${maisculas(pkm.evolution)}

Atributos:

  HP: ${pkm.attributes.hp}
  ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
  DEF: ${pkm.attributes.defense} SpDEF: ${pkm.attributes.specialDefense}
  SPEED: ${pkm.attributes.speed}

Ataques:
  ${ordenar(pkm)}`
  
  console.log(impressao)
  