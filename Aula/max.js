const array = [1, 2, 3, 10, 7, 5];

//Encontrar o maior item do array.
//Sempre tem que retornar alguma coisa.

const maior = array.reduce((acc, x) => x > acc ? x : acc);

console.log(maior);