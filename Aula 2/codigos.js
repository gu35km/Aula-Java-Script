/*alert("Seja Bem Vindo Gustavo!")
alert("Tudo Bem com você ?")
alert("Eu estou ^^")
document.write("Aprendendo JS")*/


console.log("Recados para desenvolvedores");
let nome , idade ;
nome = "Gustavo";
idade = "23";
console.log("Nome:" +nome)
console.log("Idade:" +idade)
//Operadores aritimeticos
console.log("10+2=" +(10 + 2))
console.log("35-15="+(35-15))
console.log("50*6=" +(50*6))
console.log("100/2=" +(100/2))
console.log("50%100="+(50%100))
//operadores relacionais
console.log("10>2?"+(10>2))//maior
console.log("10<2?"+(10<2))//menor
console.log("10=2?"+(10==2))//igual
console.log("10!=2?"+(10!=2))//diferente
console.log("10>=2?"+(10>=2))//maior ou igual
console.log("10<=2?"+(10<=2))//menor ou igual
//operadores logicos
console.log("10<2?" + ( (10<2) && (5==5) ))//operador E
console.log( "10<2?" + ( (10<2) || (5==5) ))//operador OU
console.log( !(5==5) )// operador não

let numero1 = prompt("informe um numero");
let numero2 =prompt("informe outro numero");

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

let total = numero1 + numero2

console.log(total)

console.log(numero1 + numero2);

console.log(typeof(numero1))
console.log(typeof(numero2))

// As barras servem para fazer um comentario na mesma linha
/* Barra mais * serve para comentarios
em varias linhas */

let nota1 =7
let nota2 = 8.5
let nota3 = 4.5
let nota4 =6
let media = (nota1+nota2+nota3+nota4) / 4
console.log ("A media do Gustavo é" + media)