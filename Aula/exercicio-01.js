const numeros = [100, 200.2, 3000, 400, 500];

const ehValido = numeros.every(x => x >= 0 && x % 1 === 0);

console.log(ehValido);