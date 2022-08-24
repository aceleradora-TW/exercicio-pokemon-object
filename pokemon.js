const pokemon = require('./db');
const printPokemon = () => {
  let pokemonCapitalize = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  let abilityCapitalize = pokemon.ability.charAt(0).toUpperCase() + pokemon.ability.slice(1);
  let preCapitalize = pokemon.preEvolution.charAt(0).toUpperCase() + pokemon.preEvolution.slice(1);
  let evoCapitalize = pokemon.evolution.charAt(0).toUpperCase() + pokemon.evolution.slice(1);
  let move1Capitalize = pokemon.moves[0].name.charAt(0).toUpperCase() + pokemon.moves[0].name.slice(1);
  let move2Capitalize = pokemon.moves[1].name.charAt(0).toUpperCase() + pokemon.moves[1].name.slice(1);
  let move3Capitalize = pokemon.moves[2].name.charAt(0).toUpperCase() + pokemon.moves[2].name.slice(1);
  let move4Capitalize = pokemon.moves[3].name.charAt(0).toUpperCase() + pokemon.moves[3].name.slice(1);
  pokemon.types[0] = 'Eletrico'


  console.log("Nome: "+pokemonCapitalize+" - Tipo: "+pokemon.types[0]+
  "\nHabilidade: "+abilityCapitalize+"\n\n"+
  "Linha de evolução:\n"+
   preCapitalize +" >> "+pokemon.name.toUpperCase() +" >> "+evoCapitalize+
   "\n\nAtributos:\n\n"+
   "HP: "+pokemon.attributes.hp+
   "\nATK: "+pokemon.attributes.attack+
   "\nDEF: "+pokemon.attributes.defense+
   "\nSPEED: "+pokemon.attributes.speed+
   "\n\n"+
   "Ataques:"+
   "\nLv"+pokemon.moves[0].lv+": "+move1Capitalize+
   "\nLv"+pokemon.moves[3].lv+": "+move4Capitalize+
   "\nLv"+pokemon.moves[1].lv+": "+move2Capitalize+
   "\nLv"+pokemon.moves[2].lv+": "+move3Capitalize
  );
}

module.exports = { printPokemon }