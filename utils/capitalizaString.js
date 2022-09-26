const capitalizaString = (item) => item.split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join(" ");

module.exports = { capitalizaString };