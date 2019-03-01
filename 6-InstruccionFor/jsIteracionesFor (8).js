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
           alert("El numero es Primo");
           break;


        }
    }
   





}//FIN DE LA FUNCIÓN