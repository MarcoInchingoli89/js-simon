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
// Seleziono il container e lo aggiungo ad una variabile
const simonContainer = document.querySelector('.container');

// Creo un div e lo aggiungo ad una variabile
const numbersElement = document.createElement('div');
numbersElement.className = 'numbers';
simonContainer.append(numbersElement);

// Genero i 5 numeri casuali e li mostro all'utente
const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
numbersElement.innerText = randomNumbers.join(', ');

// Countdown di 5 secondi
let seconds = 5;
const intervalId = setInterval(() => {
    const timer = document.querySelector('.timer');
    if (seconds > 0) {
        timer.innerText = seconds;
        seconds--;
    } else {
        clearInterval(intervalId);
        timer.style.visibility = 'hidden';
        numbersElement.style.visibility = 'hidden';
        showInput();
    }
}, 1000);

// Mostra gli input per i numeri all'utente
function showInput() {
    const inputContainer = document.querySelector('.input-container');
    for (let i = 0; i < 5; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        inputContainer.append(input);
    }
    // Aggiungi il pulsante per inviare i numeri
    const btnSubmit = document.createElement('button');
    btnSubmit.innerText = 'Invia';
    btnSubmit.addEventListener('click', checkNumbers);
    inputContainer.append(btnSubmit);
}

// Controlla i numeri inseriti dall'utente
function checkNumbers() {
    const inputContainer = document.querySelector('.input-container');
    const inputs = inputContainer.querySelectorAll('input');
    const userNumbers = Array.from(inputs).map(input => Number(input.value));
    console.log(userNumbers);

    // Verifica quanti numeri sono stati indovinati
    let count = 0;
    let result = '';
    for (let i = 0; i < userNumbers.length; i++) {
        if (randomNumbers.includes(userNumbers[i])) {
            count++;
            result += userNumbers[i] + ' ';
        }
    }

    // Mostra il risultato all'utente
    const resultElement = document.querySelector('.result');
    resultElement.innerText = `Hai indovinato ${count} numeri: ${result}`;
}