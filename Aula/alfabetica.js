const nomes = ["pedro", "Amanda", "júnior", "ana", "João"];

//Organizando nomes em ordem alfabetica.

nomes.sort((a, b) => a.localeCompare(b));

console.log(nomes);