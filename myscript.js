// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

// genero i 16 numeri casuali da 1 a 100

var mineArray = []; // predispongo un array vuoto che ospiti le mine

// per generare 16 mine devo ripetere la funzione 16 volte
i = 0;
while(mineArray.length < 16){
  var numero = numRandom(1, 100); //invoco la funzione per generare una mina
  console.log(numero);
    // devo controllare che siano 16 mine diverse = potrei dover ciclare più di 16 volte
    if(mineArray.includes(numero) == false) {
      // se il numero non è all'interno dell'array lo metto dentro
      mineArray.push(numero);
    }
  i++
}
console.log('mine:' , mineArray);

// variabili scelta e altre

var perso = false; // quando il numero dell'utente non è una mina
var okArray = []; //array vuoto dei numeri inseriti dall'utente che non sono mine
console.log('ok:' , okArray);

while (okArray.length < 84) {
  var scelta = parseInt(prompt('scegli un numero'));
  if (mineArray.includes(scelta) == true){
    console.log('hai perso');
    console.log('punteggio = ' + okArray.length);
  } else {
    okArray.push(scelta);
    console.log('ok:' , okArray);
  }
  i++;

}



// devo dare il punteggio finale = devo "conservare" i numeri diversi dalle mine e contarli (anche perchè il giocatore non può inserire numeri uguali)



// FUNZIONI

// funzione random
function numRandom(min, max) {
  // il computer genera il suo numero
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
//
// function inArray(x, array) {
//   var found = false;
//   var i = 0;
//   while (found == false && i < array.length) {
//    if (array[i] == x)  {
//      found = true;
//    }
//    i++;
//   }
//   return found;
// }
