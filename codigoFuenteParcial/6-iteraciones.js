//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var importe;
    var diamayor;
    var diamenor;
    var flag = 0;
    var menor;
    var mayor;

    for (var i = 1; i <= 7; i++) {
        importe = parseInt(prompt("Ingrese importe de ventas por dia " + i));
    }

    while (importe <= 0 || isNaN(importe)) {//VALIDACION//
        importe = parseInt(prompt("Error.Ingrese el numero nuevamente"));
    }
    if (importe > mayor || flag == 0) {
        mayor = importe;
        diamayor = i;

    }
    if (importe < menor || flag == 0) {
        menor = importe;
        diamenor = i;
        flag = 1;
    }
    document.write("El importe mayor fue de $ " + mayor + " en el dia " + diamayor + "<br>");
    document.write("El importe menor fue de $ " + menor + " en el dia " + diamenor + "<br>");



}







