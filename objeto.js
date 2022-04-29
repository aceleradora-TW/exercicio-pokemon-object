const bancodeDados = require('./db')
function letraMaius(letra){
    return letra[0].toUpperCase() + letra.slice(1)
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

Ataques:
  Lv ${bancodeDados.moves[0].lv} - ${letraMaius(bancodeDados.moves[0].name)}
  Lv ${bancodeDados.moves[1].lv} - ${letraMaius(bancodeDados.moves[1].name)}
  Lv ${bancodeDados.moves[2].lv} - ${letraMaius(bancodeDados.moves[2].name)}
  Lv ${bancodeDados.moves[3].lv} - ${letraMaius(bancodeDados.moves[3].name)}`
console.log(impressao)
    