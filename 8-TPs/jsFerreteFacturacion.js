/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var x;
    var y;
    var z;

    x= parseInt(document.getElementById("PrecioUno").value);
    y= parseInt(document.getElementById("PrecioDos").value);
    z= parseInt(document.getElementById("PrecioTres").value);

    var p= x+y+z;

    alert("La suma de los productos es de :" + p);


	
}
function Promedio () 
{
    var x;
    var y;
    var z;

    x= parseInt(document.getElementById("PrecioUno").value);
    y= parseInt(document.getElementById("PrecioDos").value);
    z= parseInt(document.getElementById("PrecioTres").value);

    var d= (x+y+z)/3;

    alert("El promedio de los productos es :" + d);


    
	
}
function PrecioFinal () 
{
    var x;
    var y;
    var z;

     x= parseInt(document.getElementById("PrecioUno").value);
    y= parseInt(document.getElementById("PrecioDos").value);
    z= parseInt(document.getElementById("PrecioTres").value);

    var p= x +y+z;
    var t= (p*25)/100;
    var d=p+t;

    alert("El precio final mas IVA es de :"+d);

    
	
}