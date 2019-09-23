function ordenar(array){
    for (i=1; i < array.length; i++){
        key=array[i];
        b=i-1
        while(b>=0 && array[b] > key){
            array[b+1]=array[b];
            b--;
        }
        array[b+1]=key
    }
    return array
}