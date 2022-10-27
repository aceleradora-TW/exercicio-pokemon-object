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
atack(pokemon.moves);
