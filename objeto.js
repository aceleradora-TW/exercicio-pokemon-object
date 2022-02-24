function pegaPokemon (){
const pikachu = {
    name: "pikachu",
    types: ["eletric"],
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
        }],
    ability: "static",
    preEvolution: "pichu",
    evolution: "raichu",
    attributes: {
        hp: 100,
        attack: 55,
        defense: 34,
        specialAttack: 100,
        specialDefense: 30,
        speed: 150
    }
}

const capitalized = (palavra) => palavra[0].toUpperCase() + palavra.substring(1)
const capitalized2 = (palavra) => palavra[0].toUpperCase() + palavra.substring(1)
let nome= pikachu.name
let tipo = pikachu.types[0]
let habilidade= pikachu.ability
    let preEvolucao = pikachu.preEvolution
    let pikachuNormal = pikachu.name.toUpperCase()
    let evolucao = pikachu.evolution
    let atributoHp = pikachu.attributes.hp
    let atributoAtack = pikachu.attributes.attack
    let atributoDefense = pikachu.attributes.defense
    let atributoSpecialAtack = pikachu.attributes.specialAttack
    let atributoSpecialDefense = pikachu.attributes.specialDefense
    let atributoSpeed = pikachu.attributes.speed
    let ataques = pikachu.moves[0].name
    let nivel = pikachu.moves[0].lv
    let ataques1 = pikachu.moves[1].name
    let nivel1 = pikachu.moves[1].lv
    let ataques2 = pikachu.moves[2].name
    let nivel2 = pikachu.moves[2].lv
    let ataques3 = pikachu.moves[3].name
    let nivel3 = pikachu.moves[3].lv
    return `Nome: ${capitalized(nome)} - Tipo: ${tipo}
Habilidade: ${capitalized(habilidade)}
    
Linha de evolução:
    ${capitalized(preEvolucao)} >> ${pikachuNormal} >> ${capitalized(evolucao)}
    
Atributos:
    
    HP: ${atributoHp}
    ATK: ${atributoAtack} SpATK: ${atributoSpecialAtack}
    DEF: ${atributoDefense} SpDEF: ${atributoSpecialDefense}
    SPEED: ${atributoSpeed}
    
    Ataques:
    Lv ${nivel} - ${capitalized(ataques)}
    Lv ${nivel3} - ${capitalized2(ataques3)}
    Lv ${nivel1} - ${capitalized(ataques1)}
    Lv ${nivel2} - ${capitalized(ataques2)}`
    
}
console.log(pegaPokemon())


    
   /* 
    let numero = pikachu[i].endereco.numero
    let bairro = pikachu[i].endereco.bairro
    let cidade = pikachu[i].endereco.cidade
    let estado = pikachu[i].endereco.estado
    let cep = pikachu[i].endereco.cep*/
    //console.log(`\nNome: ${nome}\nIdade: ${idade}\nRG: [${rg}] - CPF: ${cpf}\n\nEndereço: \nRua: ${rua}, ${numero}, ${bairro}, ${cidade} / ${estado}\nCEP: ${cep} `
  //  )
  


//console.log(objetoPikachu())

/*

let inicio = 0
// pegar ultimo da lista
let final = pikachu.length - 1

for (; inicio <= final; inicio++) {



como tera de ser imprimido
Nome: Pikachu - Tipo: Eletrico
Habilidade: Static

  Linha de evolução:
Pichu >> PIKACHU >> Raichu

Atributos:

HP: 100
ATK: 55 SpATK: 100
DEF: 34 SpDEF: 30
SPEED: 150

Ataques:
    Lv 5 - Tackle
    Lv 9 - Thunder Wave
    Lv 20 - Thunderbolt
    Lv 50 - Thunder





const objetoAluna = alunas => alunas.map(aluna => ({
nome: aluna.nome,
media: formataNumero(media(aluna.prova)),
aprovada: aprovada(aluna.prova)
})) */




