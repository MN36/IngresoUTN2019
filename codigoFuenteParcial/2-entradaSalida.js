//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var importe;
    var iva=21;
    var importefinal;
    
    importe=parseInt(prompt("Ingrese el importe"));

    importefinal=importe+importe*iva/100;

    document.getElementById("importe").value=importefinal;



}

