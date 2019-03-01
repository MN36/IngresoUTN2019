//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var largo;
    var ancho;
    //var alambre; //por metros;
    var perimetro;

    largo = document.getElementById("largo").value;
    ancho = document.getElementById("ancho").value;

    perimetro=(ancho*2 + largo*2)*6;
    alert("Se necesitan "+ perimetro+" metros de alambre");




}

