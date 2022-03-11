//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

const array = [5, 13, 6, 9, 2, 21, 45, 62, 19, 90];
let somma = 0;
for (let i = 0; i < array.length; i++) {
    if (i % 2 != 0) {
        somma += array[i];
        console.log(array[i]);
    }
}
alert(somma);