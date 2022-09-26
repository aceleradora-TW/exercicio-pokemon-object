const { capitalizaString } = require('./utils/capitalizaString');
const { retornarAtributo } = require('./utils/retornarAtributo');
const { retornarMovimento } = require('./utils/retornarMovimento');


const retornaNome = (item) => capitalizaString(item.name);

const retornaTipo = (item) => capitalizaString(item.types[0][0]) + item.types[0].slice(1) + "o";

const retornaHabilidade = (item) => capitalizaString(item.ability);

const retornaEvolucoes = (item) => capitalizaString(item.preEvolution) + " >> " + item.name.toUpperCase() + " >> " + capitalizaString(item.evolution);


const printPokemon = pkm => {
  console.log(`  Nome: ${retornaNome(pkm)} - Tipo: ${retornaTipo(pkm)}
  Habilidade: ${retornaHabilidade(pkm)}

  Linha de evolução:
    ${retornaEvolucoes(pkm)}

  Atributos:

    HP: ${retornarAtributo(pkm, 'hp')}
    ATK: ${retornarAtributo(pkm, 'attack')} SpATK: ${retornarAtributo(pkm, 'specialAttack')}
    DEF: ${retornarAtributo(pkm, 'defense')} SpDEF: ${retornarAtributo(pkm, 'specialDefense')}
    SPEED: ${retornarAtributo(pkm, 'speed')}

  Ataques:
    Lv 5 - ${retornarMovimento(pkm, 5)}
    Lv 9 - ${retornarMovimento(pkm, 9)}
    Lv 20 - ${retornarMovimento(pkm, 20)}
    Lv 50 - ${retornarMovimento(pkm, 50)}`);
}

module.exports = { printPokemon }