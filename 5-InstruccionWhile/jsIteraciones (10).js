function Mostrar() {

	var numero;
	var respuesta = "si";
	var acumuladorneg = 0;
	var acumuladorpos = 0;
	var contadorpos = 0;
	var contadorneg = 0;
	var contadorceros = 0;
	var contadorpares = 0;
	var promediopos = 0;
	var promedioneg = 0;
	var diferencia;

	do {
		numero = parseInt(prompt("Ingrese su numero"));

		if (numero < 0) {
			acumuladorneg = numero + acumuladorneg;
			acumuladorneg++;
		}
		else if(numero>=0){
			acumuladorpos=numero+acumuladorpos;
			acumuladorpos++;
		}
		else{
			contadorceros++;

		}
	
	} while (respuesta == "si");

	if(numero % 2==0){
		contadorpares++;
	}

	promediopos=acumuladorpos/contadorpos;
	promedioneg=acumuladorneg/contadorneg;
	diferencia=contadorpos-contadorneg;
	//O como en la consigna no especifica..Tambien podria ser:
	// diferencia=acumuladorpos-acumuladorneg;

	document.write("1-Suma de los negativos "+ acumuladorneg+"<br>"+ "2-Suma de los positivos"+ acumuladorpos+"<br>"+"3-Cantidad de positivos"+contadorpos+"<br>"+ "4-Cantidad de negativos"+contadorneg+"<br>"+ "5-Cantidad de ceros"+contadorceros+"<br>"+"6-Cantidad de números pares"+contadorpares+"<br>"+" 7-Promedio de positivos"+promediopos+"<br>"+"8-Promedios de negativos"+promedioneg+"<br>"+" 9-Diferencia entre positivos y negativos"+diferencia+"<br>");

//ME FALTA PREGUNTAR SI DESEA CONTINUAR::::::::::



}




//FIN DE LA FUNCIÓN