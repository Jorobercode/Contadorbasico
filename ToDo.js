let valor = 0; // Valor inicial del contador

function incrementar() {
  valor = valor + 1;
  actualizar();
}

function decrementar() {
  valor = valor - 1;
  actualizar();
}

function actualizar() {
  let elemento = document.getElementById("contador");
  elemento.innerText = valor;

  // Cambiar color si llega a 10 o más
  if (valor >= 10) {
    elemento.style.color = "red";
  } else {
    elemento.style.color = "blue";
  }
}