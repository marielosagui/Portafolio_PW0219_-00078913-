/*Conversor decimal-binario: Crear una función en JavaScript, que reciba como parámetro un entero positivo.
La función debe devolver el valor en binario.  */

function binario (numero){

    var array=[];
    var entrada=0;
    var resultado='';

    if(n==0){
        return n;
    }
    while (n>0){
        residuo=parseInt(n%2);
        n=parseInt(n/2);
        array[entrada]=residuo;
        entrada++
    }
for(var i=array.length-1;i>=0;i--){
    resultado+=array[i];
}

return resultado;
}