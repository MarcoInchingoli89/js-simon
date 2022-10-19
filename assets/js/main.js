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
//array
//Ciclo While
//Ciclo If

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
//Inserisco un numero casuale in una variabile
let generateRandomNumbers = () => Math.floor(Math.random() * 100);
const randomNumbers = generateRandomNumbers();
/* console.log(randomNumbers); */
//Seleziono la classe "numbers"
const numbersElement = document.querySelector('.numbers');
/* console.log(numbersElement); */
//Inserisco i numeri all'interno di "numbers"
//Stampo l'elemento con i numeri in pagina
numbersElement.innerText = randomNumbers;
console.log(numbersElement);

/*Creo 5 numeri casuali e li stampo in pagina*/
//Creo una funzione per inserire i numeri nell'array
generateNumbersArray(1, 100);
function generateNumbersArray(min, max) {
    //Creo una variabile con un array vuoto
    const randomNumbersArray = [];
    console.log(randomNumbersArray)
    //Devo aggiungere numeri casuali nell'array finché non arrivo a 5
    while (randomNumbersArray !== 5) {
        generateRandomNumbers
        if (!randomNumbersArray.includes(randomNumbers)) {
            randomNumbersArray.push(randomNumbers);
            console.log(randomNumbersArray)
        }
    }
        return randomNumbersArray
}

/* const randomNumbersArray = generateNumbersArray(1, 100);
console.log(randomNumbersArray) */
//Se è già incluso un numero passa al prossimo, altrimenti esce dal blocco
//Salviamo i 5 numeri in una variabile e li stampiamo in pagina