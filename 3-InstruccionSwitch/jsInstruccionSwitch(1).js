function Mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero":
    alert("Que comiences bien el año =)");
    break;

    case "Marzo":
    alert("A clases =(");
    break;

    case "Julio":
    alert("Se vienen las vacaciones XD");
    break;

    case "Diciembre":
    alert("Felices fiestas!!");
    break;

    default:
    alert("Mes normal sin mensaje");
}



}//FIN DE LA FUNCIÓN