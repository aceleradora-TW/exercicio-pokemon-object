const pokemon = require("./db");

const printPokemon = (pkm) => {
  console.log(`${pkm.name}
  
  
  `);
};
printPokemon(pokemon)
module.exports = { printPokemon };
