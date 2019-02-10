/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var x;
    var y;

    x=parseInt(document.getElementById("numeroDividendo").value);
    y=parseInt(document.getElementById("numeroDivisor").value);

    var z= x%y;

    alert("El resto es: " + z);
	
}
