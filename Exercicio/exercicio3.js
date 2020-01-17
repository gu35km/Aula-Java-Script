
let nome = prompt("informe o nome do vendedor");

let codigo =prompt("informe o codigo da peça");

let preco =prompt("informe o preço da peça");

let quantidade =prompt("informe a quantidade ");

console.log("nome vendedor "+nome)
console.log("codigo do produto "+codigo)
console.log("preço da peça "+preco)
console.log("quantidade vendida "+quantidade)

total = preco *quantidade
comicao = total *0.05
console.log(total)
console.log("A comissao do vendedor é "+comicao)