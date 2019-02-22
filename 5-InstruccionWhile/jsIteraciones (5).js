function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(!(sexo=="m"|| sexo=="f"))
{
    alert("Incorrecto");
    sexo=(prompt("Intente de nuevo"));
    document.getElementById("Sexo").value=sexo;
}

alert("Correcto");
document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN