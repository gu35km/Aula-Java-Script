let cliente, resposta

document.write("<h2> Clientes</h2>")
document.write("<ul>")
resposta = true

while (resposta== true) {
    cliente = prompt("Nome do cliente")
    document.write("<li>" + cliente + "</li>" )
    resposta = confirm("Cadastgrar outro cliente: Sim ou Não")
}

document.write("</ul>")


let contador=1
while(contador<= 10){
    document.write("Numero: " + contador)
    

    if(contador == 5){
        document.write(" Aqui é a metade")
    }
    document.write("<br>")
    //contadoor = contador +1  ******* ou contador++   ******* ou contador--
    contador++
}