function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
//alert (mesDelAño);
 switch(mesDelAño)
 {
     case "Julio":
     case "Agosto":
     alert("Abrigate que hace frio!");
     break;

     case "Enero":
     case "Febrero":
     case "Marzo":
     case "Abril":
     case "Mayo":
     case "Junio":
     alert("Falta para el invierno!!");
     break;

     case "Septiembre":
     case "Octubre":
     case "Noviembre":
     case "Diciembre":
     alert("Ya pasó el invierno,ahora CALOR!");
     break;




 }



}//FIN DE LA FUNCIÓN