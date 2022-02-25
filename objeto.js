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
let  letra =  pikachu.moves[3].name
const capitalized = (palavra) => palavra[0].toUpperCase() + palavra.substring(1)
//console.log(capitalized(letra))
// Convertendo primeira letra em maiuscula.
   letra.charAt(0).toUpperCase() + letra.slice(1);
  for (let i = 0; i < letra.length; i++) {
        if (letra.charAt(i) ===" ") {

            // Convertendo letra após o ESPAÇO em maiuscula
            let charToUper = letra.charAt(i+1).toUpperCase();

            // Colocando letra de antes do ESPAÇO na variável
            let sliceBegin = letra.slice(0, (i+1));

            // colocando o letra de depois do ESPAÇO na variável
            let sliceEnd = letra.slice(i + 2);

            // Juntando tudo
            let juntando = sliceBegin + charToUper + sliceEnd;
         //   return capitalized(juntando)
        
 

    return `Nome: ${capitalized(pikachu.name)} - Tipo: ${pikachu.types[0]}
Habilidade: ${capitalized(pikachu.ability)}
    
Linha de evolução:
    ${capitalized(pikachu.preEvolution)} >> ${pikachu.name.toUpperCase()} >> ${capitalized(pikachu.evolution)}
    
Atributos:
    
    HP: ${pikachu.attributes.hp}
    ATK: ${pikachu.attributes.attack} SpATK: ${pikachu.attributes.specialAttack}
    DEF: ${pikachu.attributes.defense} SpDEF: ${pikachu.attributes.specialDefense}
    SPEED: ${pikachu.attributes.speed}
    
    Ataques:
    Lv ${pikachu.moves[0].lv} - ${capitalized(pikachu.moves[0].name)}
    Lv ${ pikachu.moves[3].lv} - ${capitalized(juntando)}
    Lv ${pikachu.moves[1].lv} - ${capitalized(pikachu.moves[1].name)}
    Lv ${pikachu.moves[2].lv} - ${capitalized(pikachu.moves[2].name)} 
    `
        }}
}

console.log(pegaPokemon())

// const capitalized2 = (palavra) => palavra[0].toUpperCase() + palavra.substring(1)
// let nome= pikachu.name
// let tipo = pikachu.types[0]
// let habilidade= pikachu.ability
//     let preEvolucao = pikachu.preEvolution
//     let pikachuNormal = pikachu.name.toUpperCase()
//     let evolucao = pikachu.evolution
//     let atributoHp = pikachu.attributes.hp
//     let atributoAtack = pikachu.attributes.attack
//     let atributoDefense = pikachu.attributes.defense
//     let atributoSpecialAtack = pikachu.attributes.specialAttack
//     let atributoSpecialDefense = pikachu.attributes.specialDefense
//     let atributoSpeed = pikachu.attributes.speed
//     let ataques = pikachu.moves[0].name
//     let nivel = pikachu.moves[0].lv
//     let ataques1 = pikachu.moves[1].name
//     let nivel1 = pikachu.moves[1].lv
//     let ataques2 = pikachu.moves[2].name
//     let nivel2 = pikachu.moves[2].lv
//     let ataques3 = pikachu.moves[3].name
//     let nivel3 = pikachu.moves[3].lv

    
//     let numero = pikachu[i].endereco.numero
//     let bairro = pikachu[i].endereco.bairro
//     let cidade = pikachu[i].endereco.cidade
//     let estado = pikachu[i].endereco.estado
//     let cep = pikachu[i].endereco.cep
//     //console.log(`\nNome: ${nome}\nIdade: ${idade}\nRG: [${rg}] - CPF: ${cpf}\n\nEndereço: \nRua: ${rua}, ${numero}, ${bairro}, ${cidade} / ${estado}\nCEP: ${cep} `
//   //  )
  


// //console.log(objetoPikachu())



// let inicio = 0
// // pegar ultimo da lista
// let final = pikachu.length - 1

// for (; inicio <= final; inicio++) {



// como tera de ser imprimido
// Nome: Pikachu - Tipo: Eletrico
// Habilidade: Static

//   Linha de evolução:
// Pichu >> PIKACHU >> Raichu

// Atributos:

// HP: 100
// ATK: 55 SpATK: 100
// DEF: 34 SpDEF: 30
// SPEED: 150

// Ataques:
//     Lv 5 - Tackle
//     Lv 9 - Thunder Wave
//     Lv 20 - Thunderbolt
//     Lv 50 - Thunder





// const objetoAluna = alunas => alunas.map(aluna => ({
// nome: aluna.nome,
// media: formataNumero(media(aluna.prova)),
// aprovada: aprovada(aluna.prova)
// })) 




