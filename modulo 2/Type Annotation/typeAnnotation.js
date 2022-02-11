"use strict";
//Transpilação do arquivo: <Windows> CTRL + B >>> tsc: buil/watch
// ==> Variáveis [Type Annotations]
let nome = "Eduardo Quirino"; //entrada
console.log(nome); //imressão no console
// ==> Arrays [Type Annotations]
let animais = ["Cachorro, Gato, Vaca, Caneiro, Girrafa, Tigre"]; //entrada
console.log(animais); //imressão no console
// ==> Objetos [Type Annotations]
let carro;
carro = {
    //parametros
    nome: "Toyota Yaris Sedan XS",
    ano: 2020,
    preco: 80000,
};
console.log(carro); //imressão no console
// ==> Functions [Type Annotations]
function multiplicarNumeros(num1, num2) {
    //variáveis
    //parametros
    return num1 * num2;
}
//imressão no console
console.log(multiplicarNumeros(2, 5)); //(multiplicarNumeros(2,5)) é o mesmo que dizer 2 X 5 = 10
