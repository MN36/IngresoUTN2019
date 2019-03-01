function Mostrar() {
    var numero;
    var contador;
    var numdivisores = 0;

    numero = parseInt(prompt("Ingrese su numero"));
    while (numero <= 0 || isNaN(numero)) {
        numero = parseInt(prompt("Ingrese su numero"));

    }
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            document.write(i + "<br>");
            numdivisores++;


        }
    }
    document.write("Cantidad de divisores : " + numdivisores + "<br>");



}//FIN DE LA FUNCIÓN