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
//Inserisco i 5 numeri casuali in una variabile
const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log(randomNumbers);
/* console.log(randomNumbers); */
//Seleziono la classe "numbers"
const numbersElement = document.querySelector('.numbers');
/* console.log(numbersElement); */
//Inserisco i numeri all'interno di "numbers"
//Stampo l'elemento con i numeri in pagina
numbersElement.innerText = randomNumbers;
console.log(numbersElement);

//inseriamo un countdown su pagina di 30 secondi e poi facciamo scomparire i numeri al termine

//Impostiamo la variabile dei secondi
let seconds = 30;
//Impostiamo un intervallo di tempo da 30 a 0
const intervalId = setInterval(() => {
    document.querySelector('.timer').innerText = seconds;
    if (seconds == 0) {
        /* console.log(seconds); */
        clearInterval(intervalId);
        //Faccio scomparire i numeri al termine del timer
        numbersElement.style.visibility = 'hidden';
    } else {
        seconds--;
    }

}, 1000);

//L'utente deve inserire uno alla volta i numeri visti in precedenza tramite prompt

//Setto un timer per far comparire gli input dopo che sono scomparsi i numeri
const userNumbers = setTimeout(inputNumbers, 32000)
function inputNumbers() {
    //Faccio comparire i cinque input per i numeri
    for (let index = 0; index < 5; index++) {
        const userNumber = Number(prompt('Simon dice: `Scrivi uno dei numeri appena scomparsi`'))
        console.log(userNumber)
    }    
}

//Dopo aver inserito i numeri il software dice quanti e quali numeri corretti sono stati inseriti




