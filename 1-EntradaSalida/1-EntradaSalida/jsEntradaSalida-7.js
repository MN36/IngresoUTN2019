/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var x;
    var y;

    x=parseInt(document.getElementById("numeroUno").value);
    y=parseInt(document.getElementById("numeroDos").value);

    var z= x+y;

    alert("La suma es: " + z);
	
}

function restar()
{
    var x;
    var y;

    x=parseInt(document.getElementById("numeroUno").value);
    y=parseInt(document.getElementById("numeroDos").value);

    var z= x-y;

    alert("La resta es: " + z);
	
}

function multiplicar()
{ 
    var x;
    var y;

    x=parseInt(document.getElementById("numeroUno").value);
    y=parseInt(document.getElementById("numeroDos").value);

    var z= x*y;

    alert("La multiplicacion es: " + z);
	
}

function dividir()
{
    var x;
    var y;

    x=parseInt(document.getElementById("numeroUno").value);
    y=parseInt(document.getElementById("numeroDos").value);

    var z= x/y;

    alert("La division es: " + z);
	
}

