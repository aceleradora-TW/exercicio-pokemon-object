const pokemon = require("./db");

const transformarMaiuscula = (palavra) => {
  return palavra.toUpperCase().slice(0, 1) + palavra.slice(1);
}

const tipo = (types) => {
  return types.map(type => transformarMaiuscula(type)).join("/")
}

const evolucoes = (pokemon) => {
  const preEvolucao = pokemon.preEvolution && transformarMaiuscula(pokemon.preEvolution)
  const nome = pokemon.name.toUpperCase()
  const evolucao = pokemon.evolution && transformarMaiuscula(pokemon.evolution)

  if (pokemon.preEvolution && pokemon.evolution) {
    return [preEvolucao, nome, evolucao].join(" >> ")
  }

  if (!pokemon.preEvolution && pokemon.evolution) {
    return [nome, evolucao].join(" >> ")
  }

  if (!pokemon.evolution && pokemon.preEvolution) {
    return [preEvolucao, nome].join(" >> ")
  }

  return nome
}

const adaptarMoves = (moves) => {
  return moves
    .sort((a, b) => a.lv - b.lv)
    .map(move => {
      const novosAtaques = move.name
        .split(" ")
        .map(novosAtaques => transformarMaiuscula(novosAtaques))
        .join(" ")
      return `   Lv ${move.lv} - ${novosAtaques}`
    })
    .join("\n")
}


const printPokemon = (pokemon) => {

  const { hp, attack, specialAttack, defense, specialDefense, speed } = pokemon.attributes

  console.log(`  Nome: ${transformarMaiuscula(pokemon.name)} - Tipo: ${tipo(pokemon.types)}
  Habilidade: ${transformarMaiuscula(pokemon.ability)}

  Linha de evolução:
    ${evolucoes(pokemon)}

  Atributos:

    HP: ${hp}
    ATK: ${attack} SpATK: ${specialAttack}
    DEF: ${defense} SpDEF: ${specialDefense}
    SPEED: ${speed}


  Ataques:
${adaptarMoves(pokemon.moves)} `)
}
printPokemon(pokemon)








//exemplo 1 - funcoes
//let guardarNome = []
//const nome = (mostrarNome) => {
//let mapeandoNome = pokemon.name;
//  guardarNome.push(mapeandoNome)
//console.log(`
/*Nome: ${name.toUpperCase(1).slice(0, 1) + name.slice(1)} - Tipo: ${types[0].toUpperCase(1).slice(0, 1) + types[0].slice(1).concat("o")
    }`)
  return mapeandoNome
}
nome(pokemon)

/*
//let guardarHabilidade = []
const habilidade = (mostrarHabilidade) => {
  let mapeandoHabilidade = pokemon.ability;
  //guardarHabilidade.push(mapeandoHabilidade)
  console.log(`Habilidade: ${ability.toUpperCase(1).slice(0, 1) + ability.slice(1)}`)
  return mapeandoHabilidade
}

habilidade(pokemon)


let guardarPreEvolucao = []
const preEvolucao = (mostrarPreEvolucao) => {
  let mapeandoPreEvolucao = pokemon.preEvolution;
  guardarPreEvolucao.push(mapeandoPreEvolucao)
  return mapeandoPreEvolucao
}

preEvolucao(pokemon)



let guardarEvolucao = []
const evolucao = (mostrarEvolucao) => {
  let mapeandoEvolucao = pokemon.evolution
  guardarEvolucao.push(mapeandoEvolucao)
  console.log(`
Linha de evolução:
  ${preEvolution.toUpperCase(1).slice(0, 1) + preEvolution.slice(1)
    } >> ${name.toUpperCase()} >> ${evolution.toUpperCase().slice(0, 1) + evolution.slice(1)
    }`)
  return mapeandoEvolucao
}

evolucao(pokemon)


//let guardarAtributos = []
const atributos = (vetorAtributos) => {
  let mapeandoAtributos = pokemon.attributes;
  // guardarAtributos.push(mapeandoAtributos)
  console.log(`
Atributos:
  
  HP: ${attributes.hp}
  ATK: ${attributes.attack}  SpATK: ${attributes.specialAttack}
  DEF: ${attributes.defense}  SpDEF: ${attributes.specialDefense}
  SPEED: ${attributes.speed}
  `)
  return mapeandoAtributos
}

atributos(pokemon)


//let vetorAtacksNomes = []
//let vetorAtacksLvs = []

const atack = (ataques) => {
  let mapeandoAtaques = ataques.moves.map((value, posicao) => {
    // vetorAtacksNomes.push(value.name)
    //vetorAtacksLvs.push(value.lv)
  })
  return mapeandoAtaques
}

atack(pokemon);
console.log(`Ataques:
  Lv ${moves[0].lv} - ${moves[0].name.toUpperCase(1).slice(0, 1) + moves[0].name.slice(1)
  }
  Lv ${moves[3].lv} - ${moves[3].name.toUpperCase(1).slice(0, 1) + moves[3].name.slice(1)
  }
  Lv ${moves[1].lv} - ${moves[1].name.toUpperCase(1).slice(0, 1) + moves[1].name.slice(1)
  }
  Lv ${moves[2].lv} - ${moves[2].name.toUpperCase(1).slice(0, 1) + moves[2].name.slice(1)
  }
    `)
//module.exports = { printPokemon }



/*exemplo só com console.log
const pokemon = require("./db");
const printPokemon = (pkm) => {

  console.log(`
  Nome: ${ pkm.name.toUpperCase(1).slice(0, 1) + pkm.name.slice(1) } - Tipo: ${
    pkm.types[0].toUpperCase(1).slice(0, 1) + pkm.types[0].slice(1).concat("o")
  }
 Habilidades: ${ pkm.ability.toUpperCase(1).slice(0, 1) + pkm.ability.slice(1) }
 
 Linha de evolução:
    ${
      pkm.preEvolution.toUpperCase(1).slice(0, 1) + pkm.preEvolution.slice(1)
    } >> ${ pkm.name.toUpperCase() } >> ${
      pkm.evolution.toUpperCase().slice(0, 1) + pkm.evolution.slice(1)
  }


  Atributos:

    hp: ${ pkm.attributes.hp }
  ATK${ pkm.attributes.attack } SpATK: ${ pkm.attributes.specialAttack }
  DEF: ${ pkm.attributes.defense } SpDEFF ${ pkm.attributes.specialDefense }
  SPEED: ${ pkm.attributes.speed }
  
  Ataques:
    Lv ${ pkm.moves[0].lv } - ${
      pkm.moves[0].name.toUpperCase(1).slice(0, 1) + pkm.moves[0].name.slice(1)
  }
  Lv ${ pkm.moves[3].lv } - ${
    pkm.moves[3].name.toUpperCase(1).slice(0, 1) + pkm.moves[3].name.slice(1)
  }
  Lv  ${ pkm.moves[1].lv } - ${
    pkm.moves[1].name.toUpperCase(1).slice(0, 1) + pkm.moves[1].name.slice(1)
  }
  Lv  ${ pkm.moves[2].lv } - ${
    pkm.moves[2].name.toUpperCase(1).slice(0, 1) + pkm.moves[2].name.slice(1)
  }
    `)

}
printPokemon(pokemon)
module.exports = { printPokemon }*/



/*exemplo 2- funcoes
const { preEvolution } = require("./db");
const pokemon = require("./db");
const nameTipo = (nameType) => {
  console.log(
    `Nome: ${
      nameType.name.toUpperCase(1).slice(0, 1) + nameType.name.slice(1)
    } - Tipo: ${
      nameType.types[0].toUpperCase(1).slice(0, 1) +
      nameType.types[0].slice(1).concat("o")
    }`
  );
};

const habilidade = (habilidadePkm) => {
  console.log(
    `Habilidade: ${
      habilidadePkm.toUpperCase(1).slice(0, 1) + habilidadePkm.slice(1)
    }`
  );
  console.log("\n");
};

const linhaEvolucao = (pokemon) => {
  console.log(
    `${
      pokemon.preEvolution.toUpperCase(1).slice(0, 1) +
      pokemon.preEvolution.slice(1)
    } >> ${pokemon.name.toUpperCase(1)} >> ${
      pokemon.evolution.toUpperCase().slice(0, 1) + pokemon.evolution.slice(1)
    }`
  );
  console.log("\n");
};

const atributos = (attributes) => {
  console.log(`HP: ${attributes.hp}
  ATK: ${attributes.attack} SpATK: ${attributes.specialAttack}
  DEF: ${attributes.defense} SpDEF: ${attributes.specialDefense}
 SPEED: ${attributes.speed}
  `);
  console.log("\n");
};

const atack = (moves) => {
  moves.sort((a, b) => a.lv - b.lv);
  moves.map((valor) => {
    console.log(`Lv ${valor.lv} - ${valor.name}`);
  });
};
nameTipo(pokemon);
habilidade(pokemon.ability);
linhaEvolucao(pokemon);
atributos(pokemon.attributes);
atack(pokemon.moves);*/
