const numeros = [1, 10, 2, 23, 5];

//Ordenar em ordem decrescente

//Regrinhas:
// - a vem primeiro (maior)
// + b vem primeiro (menor)

numeros.sort((a, b) => b - a);

console.log(numeros);