const pokemon = require("./db");

const getMoves = (moves) => {
  let mapeando = moves.map((move) => {
    `Lv ${move.lv} - ${move.name}`;
  });
  return mapeando;
};

const printPokemon = (pkm) => {
  console.log(`
  ${pkm.name} - ${pkm.types[0]} 
  ${getMoves(pkm.moves)}
  
  
  `);
};
console.log(printPokemon(pokemon));

module.exports = { printPokemon };
/*let mapeando = pkm.map((value,index)=>{
  console.log(value)
   })*/
