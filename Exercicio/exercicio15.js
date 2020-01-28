let valorServicos, tempoCliente, historicoPagamento

tempoCliente=prompt("Informe o tempo do cliente (anos)")
valorServicos=prompt("Qual o valor do serviço que adquiriu")
historicoPagamento=prompt("Cliente tem algun historico de pagamento (s) (n)")

if(tempoCliente>20){
    document.write("vip 1<br>")

}else if(valorServicos>10000000){
    document.write("vip 2<br>")

}else if(historicoPagamento=="s"){
    document.write("vip 3<br>")
    
}else{
    document.write("Comum")
}