function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero,
	
	while(contador<5){

		numero=prompt("Ingrese 5 Numeros");
		acumulador=acumulador+numero;
		contador=contador++;
		}
		promedio=acumulador/5;

		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=promedio;
 

}//FIN DE LA FUNCIÓN