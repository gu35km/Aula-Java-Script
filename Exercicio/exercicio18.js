/*let idade;

idade=prompt("Qual a idade do nadador?")

if(idade>=5 && idade <=7){
    document.write("Infantil A <br>")

}else if(idade>=8 && idade<=11){
    document.write("Infantil B <br>")

}else if(idade>=12 && idade<=13){
    document.write("Juvenil A <br>")

}else if(idade>=14 && idade<=17){
    document.write("Juvenilil B <br>")

}else{
    document.write("Adulto  <br>")
}
*/

let idade;

idade=prompt("Qual a idade do nadador?")

if(idade<=5){
    document.write("Não pode menores de 5 anos ")

}else if(idade<=7){
    document.write("Infantil A <br>")

}else if(idade<=11){
    document.write("Infantil B <br>")

}else if(idade<=13){
    document.write("Juvenil A <br>")

}else if(idade<=17){
    document.write("Juvenil B <br>")

}else{
    document.write("Adulto <br>")
}