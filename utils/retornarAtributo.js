const retornarAtributo = (item, atributo) => {
    for(let atr in item.attributes) {
        if(atr === atributo) return item.attributes[atr];
    }
}

module.exports = { retornarAtributo };