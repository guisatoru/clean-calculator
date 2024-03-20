// Seleciona todos os botões da calculadora
const teclado = document.querySelectorAll("#teclado button");

// Seleciona o input do resultado
const inputResultado = document.querySelector("#resultado input");

// Seleciona o botão "=" da calculadora
const botaoIgual = document.querySelector("#teclado button.quartiary");

// Seleciona o botão "CE" da calculadora
const botaoCE = document.querySelector("#teclado button.secondary");

// Seleciona o botão "C" da calculadora
const botaoC = document.querySelector("#teclado button:nth-child(2)");

let string = "";
Array.from(teclado).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inputResultado.value = string;
    } 
    
    else if (e.target.innerHTML == "C") {
      string = "";
      inputResultado.value = string;
    } 
    
    else if (e.target.innerHTML == "CE") {
      string = string.substring(0, string.length - 1);
      inputResultado.value = string;
    } 
    
    else {
      string += e.target.innerHTML;
      inputResultado.value = string;
    }
  });
});
