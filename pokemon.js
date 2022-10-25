const pokemon = require("./db");
let vetorAtacks = [];
console.log()

const atack = (ataques) => {
  let mapeando = ataques.moves.map((value, posicao) => {
    vetorAtacks.push(value.name);
    vetorAtacks.push(value.lv)
  });

  return mapeando;
};

atack(pokemon);
console.log(vetorAtacks);

const printPokemon = (pkm) => {};
printPokemon(pokemon);

printPokemon(pokemon);

module.exports = { printPokemon };

/*
 let temp;
  let mapeando = pkm.moves.map((moves,posicion,arrayInt)=>{
    temp = moves.lv
    console.log(arrayInt.lv)
  })
  console.log(temp)
  return mapeando








console.log(`
  Nome: ${pkm.name.toUpperCase(1).slice(0, 1) + pkm.name.slice(1)} - Tipo:${
    pkm.types[0].toUpperCase(1).slice(0, 1) + pkm.types[0].slice(1).concat("o")
  }
 Habilidades: ${pkm.ability.toUpperCase(1).slice(0, 1) + pkm.ability.slice(1)}
 
 Linha de evolução:         
  ${
    pkm.preEvolution.toUpperCase(1).slice(0, 1) + pkm.preEvolution.slice(1)
  } >> ${pkm.name.toUpperCase()} >> ${
    pkm.evolution.toUpperCase().slice(0, 1) + pkm.evolution.slice(1)
  }


  Atributos:

  hp: ${pkm.attributes.hp}
  ATK${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
  DEF:${pkm.attributes.defense} SpDEFF ${pkm.attributes.specialDefense}
  SPEED: ${pkm.attributes.speed}
  
  Ataques:
  Lv ${pkm.moves[0].lv} - ${
    pkm.moves[0].name.toUpperCase(1).slice(0, 1) + pkm.moves[0].name.slice(1)
  }
  Lv ${pkm.moves[3].lv} - ${
    pkm.moves[3].name.toUpperCase(1).slice(0, 1) + pkm.moves[3].name.slice(1)
  }
  Lv  ${pkm.moves[1].lv} - ${
    pkm.moves[1].name.toUpperCase(1).slice(0, 1) + pkm.moves[1].name.slice(1)
  }
  Lv  ${pkm.moves[2].lv} - ${
    pkm.moves[2].name.toUpperCase(1).slice(0, 1) + pkm.moves[2].name.slice(1)
  }
  `);*/

/*
Objt[0].titulo2.push({id2: 'valor'});
console.log(Objt[0].titulo2);







let mapeando = pkm.map((value,index)=>{
  console.log(value)
   })
   
   const getMoves = (moves) => {
  let mapeando = moves.map((move) => {
    `Lv ${move.lv} - ${move.name}`; 

  });
  return mapeando;
};
   
   */
