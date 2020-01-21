let numerojogador, numerocomputador

numerocomputador = Math.floor(Math.random(0,1) * 10);
console.log(numerocomputador)
numerojogador = prompt("Tente adivinhar o numero de 0 a 9")

if(numerocomputador == numerojogador){
    document.write("Você ganhou")
    document.write("<br>")
    document.write("<img src= 'feliz.png'>")
}else{
    document.write("Voçê perdeu")
    document.write("<br>")
    document.write("<img src= 'triste.png'>")
}