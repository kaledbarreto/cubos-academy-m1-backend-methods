const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const temMaisQue5 = palavras.some(x => x.length > 5);

if (temMaisQue5) {
  console.log("existe palavra inválida");
} else {
  console.log("array validado");
}