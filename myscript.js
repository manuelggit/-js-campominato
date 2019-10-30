// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

var mineArray = [];

for (i = 0; i < 16; i++){
  var mina = numRandom(1, 100);
  mineArray.push(mina);
}
console.log(mineArray);

var found;

var numero = parseInt(prompt('inserisci un numero'));
console.log('numero scelto = ' + numero);

// FUNZIONI

// funzione random
function numRandom(min, max) {
  // il computer genera il suo numero
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function inArray(x , array) {
  var trovato = false;
  var i = 0;
  while (found == false && i < array.length) {
   if (array[i] == x)  {
     found = true;
   }
  }
  i++;
}
