function agregarNumero(elemento){
  var caja = document.getElementById("caja");
  caja.value = caja.value + elemento.getAttribute("value");

}

function calculadora(valor){
  var operacion = document.getElementById("caja");
  caja.value = eval(operacion.value);

}
