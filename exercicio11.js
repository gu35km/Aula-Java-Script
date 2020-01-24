let num1 = prompt("Digite o primeiro valor");
let num2 = prompt("Digite o segundo valor");
let num3 = prompt("Digite o terceiro valor");

console.log("O primero valor digitado foi: " + num1)
console.log("O segundo valor digitado foi: " + num2)
console.log("O terceiro valor digitado foi: " + num3)

if( (num1 > num2) && (num1 > num3)){
    document.write("O primeiro valor digitado é maior");
}else if((num2 > num1) && (num2 > num3)){
    document.write("O segundo valor digitado é maior");
}else if((num3 > num1) && (num3 > num2)){
    document.write("O terceiro valor digitado é maior");
}   