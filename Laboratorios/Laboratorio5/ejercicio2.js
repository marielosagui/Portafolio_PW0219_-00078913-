/*Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de todos los elementos del arreglo y su promedio.*/

function sumaprom(arreglo){
    var suma=0;
    var x=0;
    var prom=0;
    arreglo.forEach((index) => {
        suma+= parseInt(index);
        x+=1;
    });
    prom=suma/x;
    console.log(suma);
    console.log(prom);
}
