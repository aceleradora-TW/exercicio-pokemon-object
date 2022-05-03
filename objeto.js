const bancodeDados = require('./db')
function letraMaius(letra){
    return letra[0].toUpperCase() + letra.slice(1)
}
function correndoArray(){
  let guardar = []
  for(let i=0; i<=bancodeDados.moves.length; i++){
    if(i == bancodeDados.moves.length){
      break
    }
   guardar.push(`  Lv ${bancodeDados.moves[i].lv} - ${letraMaius(bancodeDados.moves[i].name)} 
`)
  }  
  return String(guardar.join(''))
}


for(var i=0; i<bancodeDados.types.length; i++){
    if(bancodeDados.types[i] === 'eletric'){
        tipo = 'Eletrico'
    }
}

//letraMaius(bancodeDados.name)
let impressao = `Nome: ${letraMaius(bancodeDados.name)} - Tipo: ${tipo}
Habilidade: ${letraMaius(bancodeDados.ability)}

Linha de evolução:
  ${letraMaius(bancodeDados.preEvolution)} >> ${bancodeDados.name.toUpperCase()} >> ${letraMaius(bancodeDados.evolution)}

Atributos:

  HP: ${bancodeDados.attributes.hp}
  ATK: ${bancodeDados.attributes.attack} SpATK: ${bancodeDados.attributes.specialAttack}
  DEF: ${bancodeDados.attributes.defense} SpDEF: ${bancodeDados.attributes.specialDefense}
  SPEED: ${bancodeDados.attributes.speed}

Ataques:`
console.log(impressao)
console.log(correndoArray())
  