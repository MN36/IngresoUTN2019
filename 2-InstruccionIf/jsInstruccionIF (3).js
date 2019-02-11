function Mostrar()
{
//tomo la edad  
var edad;

edad=parseInt(document.getElementById("edad").value);

if(edad>=18)
{
    alert("Mayor de edad");
}
else
{
    alert("Menor de edad");
}

alert("Aqui finaliza la funcion");

}//FIN DE LA FUNCIÓN