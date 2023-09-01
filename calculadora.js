var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplicar = require("./modulos/multiplicar");
var dividir = require("./modulos/dividir");
var subtrair = require("./modulos/subtrair");
var mensagem = require("./modulos/mensagem");
var nome = " heloisa";
var mensagens= "seja bem-vinda";

console.log("A soma de x e y é: " + somar(10,90));
console.log("A medis de x e y é: " + media(10,90));
console.log("A multiplicação de x e y é: " + multiplicar(10,90));
console.log("A divisão de x e y é: " + dividir(10,90));
console.log("A subtração de x e y é: " + subtrair(10,90));
console.log(mensagem(nome,mensagens));