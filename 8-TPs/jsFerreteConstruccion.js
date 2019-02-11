/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;
    var perimetro;

    largo=parseFloat(document.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);
    
    perimetro= (largo+ancho)*2;
    alambre= perimetro *3; 
     
   
    alert("La cantidad de alambre a comprar es de : "+alambre);


}
function Circulo () 
{
    var radio;
    var alambre;
    var perimetro;

    radio=parseFloat(document.getElementById("Radio").value);

    perimetro=2*Math.PI*radio;

    var alambre= perimetro*3;

    alert("Cantidad de alambre que se debe comprar es de :"+ alambre);




	
}
function Materiales () 
{
    var largo;
    var ancho;
    var cal;
    var cemento;
    var superficie;

    largo=parseFloat(documento.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);

    superficie= largo * ancho;
    cemento= superficie * 2;
    cal= superficie * 3;
    
    alert("Para hacer un contrapiso de :"+ superficie+ "M2 se necesitan :"+ cemento+" Bolsas de cemento y "+ cal + "Bolsas de cal");
	
}