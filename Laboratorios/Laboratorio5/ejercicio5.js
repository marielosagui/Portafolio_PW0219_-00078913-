/*Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de la misma manera tanto
de derecha a izquierda y viceversa. 
Crear una función en JavaScript que reciba como parámetro una palabra. 
La función debe retornar si la palabra es palíndroma o no.  */

function palindromo(cadena){
    var resultado="La cadena \"" + cadena+"\"\n";
    var cadenaOrignal=cadena.toLowerCase();
    var letraEspacios= cadenaOrignal.split("");

    var cadenaSinespacios="";
    for (i in letraEspacios){
        if(letraEspacios[i] !=""){
            cadenaSinespacios+= letraEspacios[i];
        }
    }
    var cadenaSinespacios="";
    for(i in letraEspacios){
        if (letraEspacios[i] !=""){
            cadenaSinespacios+=letraEspacios[i];
        }
    }
    var letras=cadenaSinespacios.split("");
    var letrasalreves=cadenaSinespacios.split("").reverse();

    var iguales=true;
    for (i in letras){
        if(letras[i]==letrasalreves[i]){
    }else{
        iguales=false;
    }
}
if(iguales){
    resultado+= "es palindromo";
}
else{
    resultado+="no es palindromo";
}
return resultado;
}