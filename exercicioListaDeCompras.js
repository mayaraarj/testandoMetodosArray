// * Micro desafios

//Crie um array que contenha nomes de produtos para compra. 

//Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

//Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

//console.log(“O método Join realiza tal coisa”)
//console.log(RESULTADO_DO_JOIN)

let listaDeCompras  = ['arroz' , 'carne' , 'batata', 'cenoura' , 'desinfetante', 'tomate']

console.log("O método push acrescenta um elemento ao final do array");
listaDeCompras.push("pimentao");
console.log(listaDeCompras);

console.log("O método pop elimina o último elemento do array");
let ultimoItem = listaDeCompras.pop();
console.log(ultimoItem);
console.log (listaDeCompras);

console.log("O método shift elimina o primeiro item de um array ");
let primeiroItem = listaDeCompras.shift();
console.log(primeiroItem);
console.log (listaDeCompras);

console.log("O método unshift recebe um ou mais parâmetros e os posiciona como elementos no começo do array");
let novosPrimeirosItens = listaDeCompras.unshift("macarrao","acelga");
console.log(listaDeCompras);

console.log("O método index of mostra a posição do elemento procurado e quando o elemento não existe retorna -1")
console.log(listaDeCompras.indexOf('cenoura'));
console.log (listaDeCompras.indexOf('frango'));

console.log ("O método last index of funciona de maneira semelhante ao anterior, mas começa a procura pelo último elemento do array");
console.log("Se houver elementos repetidos, ele retorna o primeiro que encontrar - ou seja, o mais perto do último")
listaDeCompras.push("batata");
console.log(listaDeCompras);
console.log (listaDeCompras.lastIndexOf("batata"));

console.log("O método includes funciona de forma igual ao index of, mas retorna um booleano em vez da posição do elemento ou -1");
console.log(listaDeCompras.includes("banana"));
console.log(listaDeCompras.includes("batata"));

console.log("O método join junta os elementos de um array usando um separador especificado. Caso não haja separador especificado, ele usa vírgula");
let separadosPorVirgula = listaDeCompras.join();
console.log(separadosPorVirgula);
let separadosPorTraco = listaDeCompras.join("-");
console.log (separadosPorTraco);
