/*Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa 
la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, 
con il for e con il while.*/

btn1 = document.getElementById("cicloF");
btn2 = document.getElementById("cicloW");

btn1.addEventListener("click", function () {
    let somma = 0;
    for (let i = 0; i < 5; i++) {
        let number = parseInt(prompt("Inserisci numero"));
        somma += number;
    }
    alert(somma);
});


btn2.addEventListener("click", function () {
    let i = 0;
    let somma = 0;
    while (i < 5) {
        let number = parseInt(prompt("Inserisci numero"));
        somma += number;
        i++;
    }
    alert(somma);
});

