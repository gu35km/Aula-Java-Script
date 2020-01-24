nome=prompt("Digite o nome do aluno: ");


nota1=prompt("Digite a primeira nota:");
nota2=prompt("Digite a segunda nota:");
nota3=prompt("Digite a terceira nota:");
nota4=prompt("Digite a quarta nota:");

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)
nota4 = parseFloat(nota4)

media = (nota1 + nota2 + nota3 + nota4)/3;
if (media>=7)
{
document.write ("Aluno Aprovado! <br>"+nome+"<br>" +media)
}
else {
document.write ("Aluno Reprovado! <br>"+nome+ "<br>" +media)
}