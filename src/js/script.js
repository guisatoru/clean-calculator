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
    let buttonText = e.target.textContent.trim(); 
    buttonText = buttonText.replace("×", "*");
    
    if (buttonText === "=") {
      string = eval(string);
      inputResultado.value = string;
    } 
    
    else if (buttonText === "C") {
      string = "";
      inputResultado.value = string;
    } 
    
    else if (buttonText === "CE") {
      string = string.substring(0, string.length - 1);
      inputResultado.value = string;
    } 
    
    else {
      string += buttonText;
      inputResultado.value = string;
    }
  });
});