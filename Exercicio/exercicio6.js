let varA = prompt("Informe um valor númerico");
let varB = prompt("Informe outro valor númerico");

console.log(varA);
varA= parseInt(varA)
console.log(typeof(varA)); 
console.log(varB);
varB= parseInt(varB)
console.log(typeof(varB)); 


diferenca = varA - varB;
total = diferenca * diferenca;
console.log("A diferença dos valores é de :" + diferenca)
console.log("A diferença elevado ao quadrado é de :" + total)
