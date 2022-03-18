const numeros = [1, 2, 3, 4];

const ehPerfeito = numeros.some(x => Math.sqrt(x) % 1 === 0 && Math.sqrt(x) >= 0);

console.log(ehPerfeito);