//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var nota;
    var sexo;
    var promedio;
    var notabaja;
    var cantidadvarones = 0;
    var acumulador = 0;
    var flag = 0;

    for (i = 1; i <= 6; i++) {
        nota = parseInt(prompt("Ingrese nota de alumno " + i));
        sexo = prompt("Ingrese sexo alumno " + i);
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Error.Ingrese nota nuevamente"));
        }

        while (sexo != "f".toLocaleLowerCase(sexo) || sexo != "m".toLocaleLowerCase(sexo)) {
            sexo = prompt("Error.Ingrese sexo nuevamente");
        }

        if (flag == 0 || nota < notabaja) {
            notabaja = nota;
            flag = 1;
        }
        if (nota >= 6 && sexo == "m") {
            cantidadvarones++;
        }
        if (nota > 0 || nota < 10) {
            acumulador = nota + acumulador;
        }
    }

    promedio = acumulador / 6;

    document.write("a) el promedio de las notas totales es de " + promedio.toFixed(2) + "<br>" + " b) la nota más baja es de " + notabaja + "<br>" + "c) la cantidad de varones cuya nota ha sido mayor o igual a 6 es de " + cantidadvarones + "<br>");


}

