//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var largo;
    var ancho;
    var alambre;
    var perimetro,

    largo=document.getElementById("largo").value;
    ancho=document.getElementById("ancho").value;
    perimetro=ancho*2+largo*2;
    alambre=perimetro*6;
    alert("Se necesitan "+alambre+" metros de alambre");
    //document.write("Se necesitan "+alambre+" metro de alambre");

	
	
}

