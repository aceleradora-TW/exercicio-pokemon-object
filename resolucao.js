const { preEvolution } = require('./db')
const pokemon = require('./db')

function buscaLinhaDeEvolucao(pkm){
    const preEvolution = formataPrimeiraLetra(pkm.preEvolution)
    const name = pkm.name.toUpperCase()
    const evolution = formataPrimeiraLetra(pkm.evolution)
    let linhaDeEvolucao = [preEvolution, name, evolution]
    linhaDeEvolucao.splice(1, 0, " >> ")
    
    // console.log(linhaDeEvolucao)
    return linhaDeEvolucao
}
buscaLinhaDeEvolucao(pokemon)

function formataPrimeiraLetra(str){
    if (typeof str !== 'string') {
		return '';
	}
	return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function printarPokemon(pkm){
    const name = formataPrimeiraLetra(pkm.name)
    const types = formataPrimeiraLetra(pkm.types[0])
    const ability = formataPrimeiraLetra(pkm.ability)
    const retornoLinhaDeEvolucao = buscaLinhaDeEvolucao(pkm)

    const printPokemon = `  Nome: ${name} - Tipo: ${types}
  Habilidade: ${ability}
  Linha de evolução:
    ${retornoLinhaDeEvolucao}`

    console.log(printPokemon)

}

printarPokemon(pokemon)