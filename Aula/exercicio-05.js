const pessoas = [
  {
    nome: 'Elaine',
    idade: 57
  },
  {
    nome: 'Diego',
    idade: 57
  },
  {
    nome: 'Fabiane',
    idade: 37
  },
];

pessoas.sort((a, b) => {
  if ((a.idade - b.idade) < 0) {
    return -1;
  } else if ((a.idade - b.idade) > 0) {
    return 1;
  } else {
    return (a.nome).localeCompare(b.nome);
  }
});

console.log(pessoas);