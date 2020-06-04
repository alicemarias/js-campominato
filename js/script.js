//Il computer deve generare 16 numeri casuali tra 1 e 100.
//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// variabili
var maxNumeriRandom = 100;
var numeroBombe = 16;
var bombe = arrayBombe();
var maxNumeriTentativi = maxNumeriRandom - numeroBombe;


// chiedo numeri all'utente finchè lui non scrive un numero che è una bomba o finche non raggiunge numero max tentativi
// variabile immissioni utente che sarà poi il punteggio
var immissioniUtente = 0;
var bombaPresa = false;

while (bombaPresa === false && (immissioniUtente < maxNumeriTentativi)) {
  var numeroUtente = prompt("dimmi un  numero da 1 a " + maxNumeriRandom );

  if (verificoElementoArray(numeroUtente, bombe) === true) {
    bombaPresa = true;
  } else {
    immissioniUtente++;
  }
}

// stampo messaggio per utente
if (bombaPresa === false) {
  alert("hai vinto il tuo punteggio è... " + immissioniUtente);
} else {
  alert("bomba beccata, il tuo punteggio è .... " + immissioniUtente);
}

// il pc genera 16 numeri casuali
function arrayBombe(maxNumeriRandom, numeroBombe) {
  var bombe = [];

  while(bombe.length < numeroBombe){
    var numeroCasuale = Math.floor(Math.random() * (maxNumeriRandom - 1) ) + 1;
    if(verificoElementoArray (numeroCasuale, numeroBombe)=== false) {
      bombe.push(numeroCasuale);
    }
  }
  return bombe;
}

// verifico se elemento è presente in array
function verificoElementoArray(elemento,listaArray) {
  var inArray = false;

  for (var i = 0; i < listaArray.length; i ++ ) {
    if(elemento === listaArray[i]) {
      inArray = true;
    }
  }
  return inArray;
}
