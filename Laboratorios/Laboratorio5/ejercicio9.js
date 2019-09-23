/*Análisis de una circunferencia: Crear una función en JavaScript que pida por el teclado el radio
 de un circunferencia, y calcule el área de esta y lo retorne, si el radio ingresado es negativo o cero, retornará -1.*/

 function radioCircu () {
    r = prompt('Ingrese el radio de su circunferencia: ')
    if(r <= 0) {
        return -1;
    }
    return Math.PI*Math.pow(r, 2);

}
