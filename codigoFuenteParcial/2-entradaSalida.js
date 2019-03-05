//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var iva=21;
    var importefinal;

    importe=parseInt(prompt("Ingrese su importe"));
    iva=importe*iva/100;
    importefinal=importe+iva;
    document.getElementById("importe").value=importefinal;

}

