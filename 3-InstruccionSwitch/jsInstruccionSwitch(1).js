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
    alert("A clases!!");
    break;

    case "Julio":
    alert("Se vienen las vaciones!!");
    break;

    case "Diciembre":
    alert("Felices fiestas!!");
    break;

    default:
    alert("Mes del año sin mensaje!");
}



}//FIN DE LA FUNCIÓN