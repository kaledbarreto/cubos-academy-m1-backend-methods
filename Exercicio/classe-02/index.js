const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maiorCidade = cidades.reduce((acc, x) => x.length > acc.length ? x : acc);

console.log(maiorCidade);