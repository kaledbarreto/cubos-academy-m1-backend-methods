const numeros = [1, 10, 2, 23, 5];

//Ordenar em ordem crescente

//Muda o array original para que ele fique em ordem crescente. (Se não passar argumentos ele vai pelo código unicode)

//Regrinhas:
// - a vem primeiro (menor)
// + b vem primeiro (maior)

numeros.sort((a, b) => a - b);

console.log(numeros);