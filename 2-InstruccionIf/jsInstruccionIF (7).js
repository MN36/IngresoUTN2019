function Mostrar()
{
//tomo la edad  
var edad;
var estadocivil;
edad=parseInt(document.getElementById("edad").value);
estadocivil=parseInt(document.getElementById("estadoCivil").value);

if(edad<18 && estadocivil!="soltero"){
    alert("Es muy pequeño para NO ser soltero")
}

	


}//FIN DE LA FUNCIÓN