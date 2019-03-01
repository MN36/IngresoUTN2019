function Mostrar() {
    var cantidadpares=0;
    var numero;
    var i;

    numero = prompt("Ingrese su numero");
    while (numero <= 0 || isNaN(numero)) {
        numero = prompt("Error.Ingrese su numero");
    }

    for (i=1; i <= numero; i++) {
        if (i % 2 == 0) {
            document.write(i + "<br>");
            cantidadpares++;
        }
    }
    document.write("Cantidad de pares : " + cantidadpares + "<br>");






}//FIN DE LA FUNCIÓN