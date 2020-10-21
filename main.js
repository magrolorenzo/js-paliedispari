// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no

// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
// L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".
// Il computer genera un secondo numero casuale tra 1 e 5.
// Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari.
// Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

// **************** PALINDROMO
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
