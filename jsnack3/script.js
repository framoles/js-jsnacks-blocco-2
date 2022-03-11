/*Crea due array che hanno un numero di elementi diversi. Aggiungi elementi 
casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti 
l’altro.*/

const array1 = ["elem1", "elem1", "elem1", "elem1", "elem1", "elem1", "elem1"];
const array2 = ["elem2", "elem2", "elem2"];

if (array1.length < array2.length) {

    while (array1.length != array2.length) {
        array1.push("Ciao");
    }

}
else if (array2.length < array1.length) {
    while (array1.length != array2.length) {
        array2.push("Ciao");
    }

}
else { console.log("Uguali"); }

console.log(array1);
console.log(array2);