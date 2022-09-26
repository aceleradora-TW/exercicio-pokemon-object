const retornarMovimento = (item, nivel) => {
  for(let ataque of item.moves) {
    if(ataque.lv === nivel) return ataque.name.split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join(" ");

    }
}
module.exports = { retornarMovimento }