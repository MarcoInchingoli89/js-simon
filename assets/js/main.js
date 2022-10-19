/* Consegna */

/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/* Strumenti */
//const e let
//querySelector
//createElement
//className
//append
//math.random - math.floor
//innerText
//insertAdjacentHTML o append

/* Istruzioni */
//Visualizzare in pagina 5 numeri casuali

//Creo in html un container
//Seleziono il container e lo aggiungo ad una variabile
const simonContainer = document.querySelector('.container');
/* console.log(simonContainer); */
//Creo in js un div e lo aggiungo ad una variabile
const divElement = document.createElement('div');
/* console.log(numberElement); */
//Assegno la classe "numbers" al div
divElement.className = ('numbers');
/* console.log(numberElement); */
//Lo inserisco nel container
simonContainer.append(divElement);
//Creo i 5 numeri casuali e li salvo in una variabile
const randomNumbers = Math.floor(Math.random() * 100);
/* console.log(randomNumbers); */
//Seleziono la classe "numbers"
const numbersElement = document.querySelector('.numbers');
/* console.log(numbersElement); */
//Inserisco i numeri all'interno di "numbers"
numbersElement.innerText = randomNumbers;
console.log(numbersElement)
//Stampo l'elemento con i numeri in pagina

