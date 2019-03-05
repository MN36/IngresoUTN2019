//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
var numero;
var promedio;
var maximo;
var minimo;
var cantidadpares=0;
var acumulador=0;
var flag=0;
var cantidad=0;
var respuesta="si".toLocaleLowerCase(respuesta);

do{
    numero=parseInt(prompt("Ingrese su numero"));
while(numero<0||isNaN(numero)){
    numero=parseInt(prompt("Error.Ingrese su numero nuevamente"));
}
if(numero%2==0){
    cantidadpares++;
}
if(flag==0||numero<minimo){
    minimo=numero;
}
if(flag==0||numero>maximo){
    maximo=numero;
    flag=1;
}
acumulador=acumulador+numero;
cantidad++;
respuesta=prompt("desea continuar?");
}while(respuesta=="si");
promedio=acumulador/cantidad;
document.write("a) la cantidad de números pares: "+cantidadpares+"<br>"+" b) el promedio de todos los números ingresados: "+promedio.toLocaleLowerCase(2)+"<br>"+" c) la suma de todos los números: "+acumulador+"<br>"+" d) El número máximo: "+maximo+"<br>"+" El numero mínimo: "+minimo+"<br>" );
	

}

