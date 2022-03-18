const array = [1, 2, 3, 4, 5];

const temMaiorQue5 = array.some(x => x > 5); //O some verifica se tem algum item que satisfaz a condição, e se tiver ele encerra e retorna true, se não, retorna false.

console.log(temMaiorQue5);