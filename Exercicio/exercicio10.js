let nome = prompt("Digite o nome do(a) aluno(a)");
let nota1 = prompt("Digite a primeira nota do bimestre do aluno");
let nota2 = prompt("Digite a segunda nota do bimestre do aluno");
let nota3 = prompt("Digite a terceira nota do bimestre do aluno");
let nota4 = prompt("Digite a quarta nota do bimestre do aluno");

console.log("Aluno(a): " + nome)
console.log("1º Bimestre :" + nota1)
console.log("2º Bimestre :" + nota2)
console.log("3º Bimestre :" + nota3)
console.log("4º Bimestre :" + nota4)

nota1= parseFloat(nota1);
nota2= parseFloat(nota2);
nota3= parseFloat(nota3);
nota4= parseFloat(nota4);

let media=(nota1 + nota2 + nota3 + nota4) / 4; 
console.log("A média do aluno(a) é " + media);

if (media>=6)
{
console.log("Aluno(a) " + nome + " foi APROVADO!")
}
else {
console.log("Aluno(a) " + nome + " foi REPROVADO!")
}




