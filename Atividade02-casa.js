//Questão 1:
var x = 5;
var y = 8;
console.log(x===y); //false

var x = 6;
var y = "6";
console.log(x==y); //true

var x = "7";
var y = 7;
console.log(x==y); //true

//Questão 2:
var nome = "Fulano";
var frase = "Boa noite, " + nome + "!";
console.log(frase); //Boa noite, Fulano!

//Questão 3:
var x = 10;
var y = 5;
var soma = x + y;
var resultadoA = "x = " + soma;
console.log(resultadoA); //x=15

var multiplicacao = 10*5;
var resultadoB = "x = " + multiplicacao;
console.log(resultadoB); //x=50

var zero = x * 0;
var resultadoC = "x = " + zero;
console.log(resultadoC); //x=0

var divisao = x / y;
var resultadoD = "x = " + divisao;
console.log(resultadoD); //x=2

var divisao1 = x / 2;
var resultadoE = "x = " + divisao1;
console.log(resultadoE); //x=5