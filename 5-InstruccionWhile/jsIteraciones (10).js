function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var suma;
	var positivo=0;
	var negativo=-1;
	var cantidad;
	var pares;
	var impares;
	var promedio;
	var respuesta='si';

	while(respuesta!="no")
	{
		numero=prompt("Ingrese su numero");
		if(numero=="negativo"){
			suma=negativo-numero;
			contador++;
			respuesta=prompt("desea continuar?");

		}
		else if(numero=="positivo"){
			suma=positivo+numero;
			contador++;
			respuesta=prompt("desea continuar");
		}
		document.write(suma);

		
	
	
	}




}//FIN DE LA FUNCIÓN