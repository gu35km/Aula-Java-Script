

let nome = prompt("Nome do aluno");

let nota1 = prompt("Nota do 1º Bimestre");

let nota2 = prompt("Nota do 2º Bimestre");

let nota3 = prompt("Nota do 3º Bimestre");

let nota4 = prompt("Nota do 4º Bimestre");


console.log("Nome do aluno:  "+nome);
console.log("Nota do 1º Bimestre: "+nota1);
console.log("Nota do 2º Bimestre: "+nota2);
console.log("Nota do 3º Bimestre: "+nota3);
console.log("Nota do 4º Bimestre: "+nota4);

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)
nota4 = parseFloat(nota4)

total = (nota1 + nota2 + nota3 + nota4 )/4;
console.log("A media do aluno é: "+ total);