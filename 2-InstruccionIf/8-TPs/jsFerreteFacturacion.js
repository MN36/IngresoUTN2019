/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preciouno;
    var preciodos;
    var preciotres;

    preciouno=parseFloat(document.getElementById("PrecioUno").value);
    preciodos=parseFloat(document.getElementById("PrecioDos").value);
    preciotres=parseFloat(document.getElementById("PrecioTres").value);

    var suma;
    suma= preciouno + preciodos + preciotres;
    alert("La suma de los productos es de :" + suma);
    
}

function Promedio () 
{
    var preciouno;
    var preciodos;
    var preciotres;

    preciouno=parseFloat(document.getElementById("PrecioUno").value);
    preciodos=parseFloat(document.getElementById("PrecioDos").value);
    preciotres=parseFloat(document.getElementById("PrecioTres").value);

    var promedio;
    promedio= (preciouno + preciodos + preciotres)/3;
    alert("El promedio de los productos es de :" + promedio);
	
}
function PrecioFinal () 
{
    var preciouno;
    var preciodos;
    var preciotres;

    preciouno=parseFloat(document.getElementById("PrecioUno").value);
    preciodos=parseFloat(document.getElementById("PrecioDos").value);
    preciotres=parseFloat(document.getElementById("PrecioTres").value);

    var suma;
    var iva;
    var precioiva;

    suma= preciouno+preciodos+preciotres;
    iva= suma*21/100
    precioiva= suma+iva;
    

    alert("El precio final mas IVA es de $ " + precioiva);
	
}