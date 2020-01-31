let numero, valor, total=0, media;

numero=prompt("Quantos numeros de serie você quer ?")

while(numero<=0){
    alert("numero menor ou igual a zero")
    numero=prompt("Quantos numeros de serie voce quer?")
}

for(let i=1; i<=numero; i++){
    valor=prompt("Digite um numero de serie")
    total=parseInt(valor)+numero
    
}
if(numero<=0){
    numero=prompt("Um numero não pode ser menor ou igual a zero! Digite um novo numero de serie")
}

media= total/numero
document.write(" Amedia é: " + media)
