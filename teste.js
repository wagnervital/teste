const numeros = [ 0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ];

const impares = numeros.filter(impar => {
  return impar % 2 !== 0
})

//console.log(impares)

const palavras = ["arara", "amor", "asa", "longo", "ele", "dinossauro", "esse", "peppa", "mamam", "tartaruga", "bandolin", "matam", "desodorante", "mundo", "metem", "terra", "agua", "mirim", "fogo", "sopapos"]

const palindromos = palavras.filter(palavra => {
  const palindromo = palavra.split("").reverse().join('');
  return palavra === palindromo;
})

//console.log(palindromos)

let n1 = 0;
let n2 = 1;
let n3 = 0;

while (n1 <= 100) {
  //console.log(n1)
  n3 = n1 + n2
  n1 = n2
  n2 = n3
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.unshift(0)
num.push(11)
num.splice(5,1)
num.splice(7,1,20,21,22)
//console.log(num)

const pessoas = [
	{id: 1, nome: 'Liz', idade: 2},
	{id: 2, nome: 'Thaís', idade: 32},
	{id: 3, nome: 'Jonathan', idade: 30},
	{id: 4, nome: 'Thainá', idade: 29},
	{id: 5, nome: 'Fabiano', idade: 45},
]

const pessoasSemId = pessoas.map((arg,ind,arr) => {
  return {nome : arg.nome, idade: arg.idade}
})

//console.log(pessoasSemId)

const pessoasH3 = pessoas.map((Emh) => {
  return `<h3> ${JSON.stringify(Emh)} </h3>`
})

//console.log(pessoasH3)

const jotas = {
  jason: "Jason",
  thais: "Thaís",
  liz: "Liz",
  jennei: "Jennei",
  jenyffer: "Jennyfer",
  joao: "João",
  bola: "Bola",
  gato: "Gato",
  jaguar: "Jaguar"
}

for (jota in jotas) {
    if (jota[0] == "j")
    console.log(
  //jota
  )
}