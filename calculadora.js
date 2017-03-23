function agregarNumero(elemento){
  var caja = document.getElementById("caja");
  caja.value = caja.value + elemento.getAttribute("value");

}

function calculadora(valor){
  var operacion = document.getElementById("caja");
  operacion.value = eval(operacion.value);
}

 function teclado(event){
  var tecladito = event.keycode;
   if (tecladito == 13){
     calculadora();
//return false;
   }else if (tecladito < 42 || tecladito > 57){
     return false;
   }
 }

 function borrar(numeros){
   var borrador =document.getElementById("caja")
   borrador.value = "";
 }
