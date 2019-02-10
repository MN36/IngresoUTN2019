/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var x;
    var y;

    x=parseInt(document.getElementById("sueldo").value);
    y=parseInt(document.getElementById("resultado").value);

    var z= (x * 10)/100;
    var s= x+z;

    alert("El nuevo sueldo es: "+ s);
	
}
