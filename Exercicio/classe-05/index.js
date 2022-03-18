const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const ehProibido = palavras.some(x => x === "cerveja" || x === "vodka");

if (ehProibido) {
  console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
  console.log("tudo certo, vamos as compras!");
}