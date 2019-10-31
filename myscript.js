// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

// var mineArray = [];

// mineArray deve essere lungo 16
while(mineArray.length < 16) {
   var mina = numRandom(1, 100);
   var found = inArray(numero, mineArray);
   if (found == false) {
       mineArray.push(mina); // pusho solo se la mina non è già presente
   }
   console.log(found);
   console.log('lunghezza array = ' + mineArray.length);
}
console.log(mineArray);

var maxNum = 84;

var utenteArray = [];

while (true) { // lo faccio fino a 84 tentativi, se non è presente il numero nel mineArray e se non ho inserito numeri identici
  // while // se è nell'utenteArray
  // prompt utente
  var numero = parseInt(prompt('inserisci un numero'));
  console.log('numero scelto = ' + numero);
  if(found == true){
    console.log('hai perso');
  } else {
     // controllo se siamo a maxNum
    if (maxNum == 84 && found == false){
      console.log('hai vinto');
  }
}
}



// FUNZIONI

// funzione random
function numRandom(min, max) {
  // il computer genera il suo numero
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function inArray(x, array) {
  var found = false;
  var i = 0;
  while (found == false && i < array.length) {
   if (array[i] == x)  {
     found = true;
   }
   i++;
  }
  return found;
}
