/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     var marca;
     var preciodescuento;
     cantidad=parseFloat(document.getElementById("Cantidad").value);
     marca=parseFloat(document.getElementById("Marca").value);
     preciodescuento=parseFloat(document.getElementById("precioDescuento").value);

     if(cantidad>=6)
     {cantidad=cantidad*35;
     preciodescuento= cantidad-(cantidad*50/100);

     document.getElementById("precioDescuento").value=preciodescuento;}

     //HASTA ACA TODO BIEN//
     else if(cantidad==5 && marca== "Argentinaluz")
     {preciodescuento=cantidad-(cantidad*40/100);
    document.getElementById("precioDescuento").value=preciodescuento;
}
     else
    {preciodescuento=cantidad-(cantidad*30/100);
    document.getElementById("precioDescuento").value=preciodescuento;
}
     if(cantidad==4 && marca== "Argentinaluz"|| "Felipelamparas")
          {preciodescuento=cantidad-(cantidad*25/100);
          document.getElementById("precioDescuento").value=preciodescuento;}

          else{
               preciodescuento=cantidad-(cantidad*20/100);
          }
     if(cantidad ==3 && marca =="Argentinaluz")
     { preciodescuento=cantidad-(cantidad*15/100);}
     else if(cantidad==3 && marca=="Felipelamparas")
     {preciodescuento=cantidad-(cantidad*10/100);}
     else{preciodescuento=cantidad-(cantidad*5/100);}
     
          if(preciodescuento>=120)
     { iibb=(preciodescuento*10/100)+preciodescuento
     alert("Usted pago "+ preciodescuento.toFixed(2)+ " siendo "+ iibb.toFixed(2)+ " el impuesto que se pago");}
}

