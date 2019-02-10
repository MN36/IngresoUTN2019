/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var x;
    var y;

    x=parseInt(document.getElementById("importe").value);
    y=parseInt(document.getElementById("resultado").value);

    var z= (x*25)/100;
    var p= x-z;

    alert("El importe con descuento es :" + p);
	
}
