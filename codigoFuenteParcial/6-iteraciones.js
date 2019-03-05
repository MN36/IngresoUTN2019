//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var importe;
    var importemayor;
    var importemenor;
    var flag = 0;
    var diamayor;
    var diamenor;
    for (i = 1; i <= 7; i++) {
        importe = parseInt(prompt("Ingrese importe dia " + i));
    
        while (importe <= 0 || isNaN(importe)) {
            importe = prompt("Error.ingrese importe nuevamente");
        }
        if (flag == 0 || importe < importemenor) {
            importemenor = importe;
            diamenor = i;
        }
        if (flag == 0 || importe > importemayor) {
            importemayor = importe;
            diamayor = i;
            flag = 1;
        }
    }
    document.write("El importe mayor de venta fue de "+importemayor+" en el dia "+diamayor+"<br>");
    document.write("El importe menor de venta fue de "+importemenor+" en el dia "+diamenor+"<br>");




}

