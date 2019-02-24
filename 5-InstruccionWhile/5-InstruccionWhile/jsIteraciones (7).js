function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(!(respuesta !="si")){
		acumulador=prompt("Ingrese su numero");
		respuesta=prompt("Desea ingresar otro numero?");
	}

	suma=acumulador;
	promedio=acumulador/contador;
 document.getElementById('suma').value=acumulador;
 document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN