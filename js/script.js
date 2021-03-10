/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

//Far generare 16 numeri casuali tra 1 e 100 al computer, i numeri non possono essere duplicati
var numeriRandom = [];

while (numeriRandom.length < 16) {
  var numeroRandom = Math.floor(Math.random() * 100) +1;

  if (numeriRandom.includes(numeroRandom) == false) {
    numeriRandom.push(numeroRandom);
  }
}


/*Chiedere all' utente di inserire un numero alla volta (per 84 volte) sempre tra 1 e 100
L'utente non può inserire più volte lo stesso numero*/
var numeriUtente = [];
var bomba = false;

while ( numeriUtente.length < 84 && bomba == false ) {
  var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));

  //Se il numero è presente nella lista dei numeri generati la partita termina, altrimenti si continua
  if (numeriRandom.includes(numeroUtente) == true) {
    bomba = true;
  } else if (numeriUtente.includes(numeroUtente) == false) {
    numeriUtente.push(numeroUtente);
  } else {
    alert("Non inserire lo stesso numero");
  }
}

//Al termine della partita il software deve comunicare il punteggio
if (bomba == true) {
  console.log("BOOOOM! Hai perso. Il tuo punteggio è: " + numeriUtente.length);
} else {
  console.log("Congratulazioni, hai vinto!");
}
