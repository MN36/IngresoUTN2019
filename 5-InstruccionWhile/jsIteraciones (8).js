function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	var suma;
	var multiplicacion;

	while(!(respuesta!="si")){

		numero=prompt("Ingrese su numero");
		if(numero==positivo){
			suma=numero+numero;
		}

			
			else if(numero=="negativo"){
				multiplicacion=numero*numero;
			}

		contador++;
		respuesta=prompt("Desea continuar?");

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN