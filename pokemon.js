const pokemon = require('./db');

const capitalizar = (params)=>{
  const arrayParams = params.split(" ");
  if(arrayParams.length>1){
    let palavraFinal="";
    for(let palavra of arrayParams){ 
      palavraFinal += `${palavra.charAt(0).toUpperCase()}${palavra.slice(1)} `;    
    }
    return palavraFinal.trim();
  }
  const inicialMaiuscula = params.charAt(0).toUpperCase();
  const restoPalavra = params.slice(1).toLowerCase();
  return `${inicialMaiuscula}${restoPalavra}`;

}
const capitalizarPokemon = () =>{
  pokemon.name = capitalizar(pokemon.name);
  pokemon.ability = capitalizar(pokemon.ability);
  for(let i = 0; i< pokemon.types.length;i++){
    pokemon.types[i] = capitalizar(pokemon.types[i]);
  }
  if(pokemon.preEvolution){
    pokemon.preEvolution = `${capitalizar(pokemon.preEvolution)} >> `;
  }
  if(pokemon.evolution){
    pokemon.evolution = ` >> ${capitalizar(pokemon.evolution)}`;
  }
}
const capitalizarMovimento = () =>{
  const moveSort = pokemon.moves.sort((a,b)=>{
    return a.lv - b.lv;
  });
  for(let i=0; i<moveSort.length;i++){
    pokemon.moves[i].name = capitalizar(moveSort[i].name);
  }
}
const loopMovimento = () =>{
  const moves = pokemon.moves.map((specs)=>{
    return `Lv ${specs.lv} - ${specs.name}`
  });
  return moves.join().replaceAll(",","\n  ");
}
const printPokemon = () => {
  capitalizarPokemon()
  capitalizarMovimento();
console.log(`Nome: ${pokemon.name} - Tipo: ${pokemon.types}
Habilidade: ${pokemon.ability}

Linha de evolução:
    ${pokemon.preEvolution}${pokemon.name.toUpperCase()}${pokemon.evolution}

Atributos:
  HP: ${pokemon.attributes.hp}
  ATK: ${pokemon.attributes.attack} SpATK: ${pokemon.attributes.specialAttack}
  DEF: ${pokemon.attributes.defense} SpATK: ${pokemon.attributes.specialDefense}
  SPEED: ${pokemon.attributes.speed}
   
Ataques:
  ${loopMovimento()}
  `);
}

module.exports = { printPokemon,capitalizar }