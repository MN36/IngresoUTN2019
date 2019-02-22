function Mostrar()
{

	var numero =parseInt(prompt("ingrese un número entre 0 y 10."));

	while(!(numero >=0 && numero <=9))
	{
		
		numero=parseInt(prompt("Numero Incorrecto"));
	   
	}
	document.getElementById("Numero").value=numero;
     alert("Numero correcto");

}//FIN DE LA FUNCIÓN