/*Fibonacci: La serie Fibonacci es una serie matemática muy reconocida,
 la cual tiene como primeros 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 
 Realice una función en JavaScript que reciba un número n como argumento y 
 muestre la serie hasta el enésimo término. */

 function fibonacci(n){
    var x=0;
    var y=1;
    var resultado = x + ", ";

    for(i=0; i < n-1;i++){
        var numero=x;
        x=y;
        y=numero+y;
            resultado = resultado + x + ", ";
    }
    return resultado;
}