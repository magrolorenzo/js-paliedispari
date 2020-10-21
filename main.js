// **************** PALINDROMO

// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no

var parola = prompt('Inserire una parola');
var is_palindrome = false;

function palindromo(word){
    var reverse_word = "";
    // Inserisce le lettere della parola paramentro nella stringa d'appoggio partendo dall'ultimo carattere
    for (var i = (word.length - 1); i >= 0 ; i--) {
        reverse_word += word[i];
        console.log(reverse_word);
    }

    if (reverse_word == word){
        return true;
    } else {
        return false;
    }
}

is_palindrome = palindromo(parola);
console.log(is_palindrome);


// **************** PARI E DISPARI

// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
// L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".
// Il computer genera un secondo numero casuale tra 1 e 5.
// Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari.
// Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

var pari_o_dispari = 0;
var minimo = 1;
var massimo = 5;
var numero_user = 0;
var numero_pc = 0;
var somma = 0;
var verifica_somma = false;

// Chiedi all'utente se sceglie Pari o Dispari digitando 0 o 1
do {
    pari_o_dispari = parseInt(prompt('Scegli Pari = 0 --- Scegli Dispari = 1'));
} while (pari_o_dispari !==1 && pari_o_dispari !==0 );

if( pari_o_dispari == 0 ){
    console.log("Hai scelto PARI");
} else {
    console.log("Hai scelto DISPARI");
}

// Chiedi all utente un numero compreso tra 1 e 5
do {
    numero_user = parseInt(prompt('Scegli un numero compreso tra 1 a 5'));
} while (numero_user < minimo || numero_user > massimo );
console.log("Il tuo numero è " + numero_user);

// Genera un numero casuale tra 1 e 5 per il PC
numero_pc = numeroCasuale1_5(minimo, massimo);
console.log("Numero Casuale PC: " + numero_pc);

somma = numero_user + numero_pc;
console.log("La somma del tuo numero e quello e del PC è: " + somma);

verifica_somma = EvenOrOdd(somma);
console.log(verifica_somma);

if (pari_o_dispari == 0 && verifica_somma == true){
    console.log("Hai scelto PARI e hai VINTO, la somma è " + somma);
} else if (pari_o_dispari == 0 && verifica_somma == false){
    console.log("Hai scelto PARI e hai PERSO, la somma è " + somma);
} else if (pari_o_dispari == 1 && verifica_somma == true){
    console.log("Hai scelto DISPARI e hai PERSO, la somma è " + somma);
} else if (pari_o_dispari == 1 && verifica_somma == false){
    console.log("Hai scelto DISPARI e hai VINTO, la somma è " + somma);
}



// Funzioni
function numeroCasuale1_5(min, max) {
  return Math.floor( Math.random() * (max) ) + min;
}

function EvenOrOdd(n) {
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}




















//
