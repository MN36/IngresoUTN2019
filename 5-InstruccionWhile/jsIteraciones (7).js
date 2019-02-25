function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	do{
		numero=prompt("Ingrese su numero");
		acumulador=numero+acumulador;
		respuesta=prompt("Desea continuar?")
		contador++;

	}while(respuesta=="si");
	suma=acumulador;
	promedio=acumulador/contador;
 document.getElementById("suma").value=acumulador;
 document.getElementById("promedio").value=promedio;

}//FIN DE LA FUNCIÓN