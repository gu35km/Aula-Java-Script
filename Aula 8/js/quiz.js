function VerResposta1(){
    //ALTERNATIVA 1
    let alternativa1 = document.querySelector("#pergunta1-resposta1").checked;
    if(alternativa1 == true){
        document.querySelector(".resposta1").innerHTML = "<em> Certa resposta </em>"
    }else{
        document.querySelector(".resposta1").innerHTML = "<em> Resposta errada </em>"
    }
} 

function VerResposta2(){
    //ALTERNATIVA 3
    let alternativa3 = document.querySelector("#pergunta2-resposta3").checked;
    if(alternativa3 == true){
        document.querySelector(".resposta3").innerHTML = "<em> Certa resposta </em>"
    }else{
        document.querySelector(".resposta3").innerHTML = "<em> Resposta errada </em>"
    }
} 

function VerResposta3(){
    //ALTERNATIVA 2
    let alternativa2 = document.querySelector("#pergunta3-resposta2").checked;
    if(alternativa2 == true){
        document.querySelector(".resposta2").innerHTML = "<em> Certa resposta </em>"
    }else{
        document.querySelector(".resposta2").innerHTML = "<em> Resposta errada </em>"
    }
} 

function VoceAcertou(texto){
    alert(texto);
    
}
