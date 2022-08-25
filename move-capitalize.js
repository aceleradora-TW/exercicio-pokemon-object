/*A função recebe um array de moves(Nome, lv):
    moves: [
    {
      name: "tackle",
      lv: 5
    }, {
      name: "thunderbolt",
      lv: 20
    }, {
      name: "thunder",
      lv: 50
    }, {
      name: "thunder wave",
      lv: 9
    }]
 A função deve retornar este formato:
    Lv 5 - Tackle
    Lv 9 - Thunder Wave
    Lv 20 - Thunderbolt
    Lv 50 - Thunder
*/
const { capitalizar } = require("./pokemon");
const moves = [
  {
    name: "tackle",
    lv: 5,
  },
  {
    name: "thunderbolt",
    lv: 20,
  },
  {
    name: "thunder",
    lv: 50,
  },
  {
    name: "thunder wave",
    lv: 9,
  },
];
const moveCapitalize = (moves) => {
    for(let move of moves){
        console.log(move.name)
        move.name = capitalizar(move.name);
    }
  return moves;
};
console.log(moveCapitalize(moves));
