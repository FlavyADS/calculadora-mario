const teclas = document.querySelectorAll("button");
const limpar = document.querySelector(".limpar");
let firstValue = 0;
let lastValue = 0;
let operador = undefined;
let resultado = undefined;

function callback(event) {
  const display = document.getElementById("display");
  const src = event.target.getAttribute("data-action");
  const valores = event.target.getAttribute("value");

  if (valores) {
    if (display.textContent === "0") {
      display.textContent = valores;
    } else {
      display.textContent += valores;
    }
    if (operador != undefined) {
      salvarSegundoValor();
    } else {
      salvarPrimeiroValor();
    }
  }
  switch (src) {
    case "add":
      zerarDisplay();
      salvarPrimeiroValorDisplay();
      salvarOperacao("add");
      if (firstValue != 0 && lastValue != 0) {
        gerarOperacaoCompleta();
      }
      break;
    case "subtract":
      zerarDisplay();
      salvarPrimeiroValorDisplay();
      salvarOperacao("subtract");
      if (firstValue != 0 && lastValue != 0) {
        gerarOperacaoCompleta();
      }
      break;
    case "multiply":
      zerarDisplay();
      salvarPrimeiroValorDisplay();
      salvarOperacao("multiply");
      if (firstValue != 0 && lastValue != 0) {
        gerarOperacaoCompleta();
      }
      break;
    case "divide":
      zerarDisplay();
      salvarPrimeiroValorDisplay();
      salvarOperacao("divide");
      if (firstValue != 0 && lastValue != 0) {
        gerarOperacaoCompleta();
      }
      break;
    case "calculate":
      calcular();
      mostraResultadoDisplay();
      salvarPrimeiroValor();
      apagarSegundoValor();
      apagarPrimeiroValorDisplay();
  }
  if (src === "decimal") {
    display.textContent += ".";
  }
  if (limpar) {
    limpar.addEventListener("click", limparTudo);
  }
  console.log(firstValue, lastValue, operador, resultado);
}
teclas.forEach((button) => {
  button.addEventListener("click", callback);
});

function zerarDisplay() {
  const display = document.getElementById("display");
  display.textContent = 0;
}

function salvarPrimeiroValor() {
  const display = document.getElementById("display");
  firstValue = display.innerText;
}

function salvarSegundoValor() {
  const display = document.getElementById("display");
  lastValue = display.innerText;
}

function salvarOperacao(action) {
  operador = action;
}

function calcular() {
  switch (operador) {
    case "add":
      resultado = parseFloat(firstValue) + parseFloat(lastValue);
      break;
    case "subtract":
      resultado = parseFloat(firstValue) - parseFloat(lastValue);
      break;
    case "multiply":
      resultado = parseFloat(firstValue) * parseFloat(lastValue);
      break;
    case "divide":
      resultado = parseFloat(firstValue) / parseFloat(lastValue);
      break;
  }
}

function mostraResultadoDisplay() {
  const display = document.getElementById("display");
  if( resultado != Infinity && NaN ){
    display.textContent = Number(resultado.toFixed(2))
  } else {
    display.textContent = 'Error'
  }
}  
  
function apagarSegundoValor() {
  lastValue = 0;
}

function salvarPrimeiroValorDisplay() {
  const display = document.getElementById("first-value-display");
  display.textContent = firstValue;
}

function apagarPrimeiroValorDisplay() {
  const display = document.getElementById("first-value-display");
  display.textContent = "";
}

function gerarOperacaoCompleta() {
  calcular();
  mostraResultadoDisplay();
  salvarPrimeiroValor();
  apagarSegundoValor();
  zerarDisplay();
  salvarPrimeiroValorDisplay();
}

function limparTudo() {
  zerarDisplay();
  firstValue = 0;
  lastValue = 0;
  operador = undefined;
  resultado = undefined;
}
