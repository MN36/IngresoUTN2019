function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero >=0 && numero<=9)){
		numero=prompt("Numero incorrecto,intente nuevamente");
	}

	alert("Numero CORRECTO!");
	document.getElementById("Numero").value=numero;


}//FIN DE LA FUNCIÓN