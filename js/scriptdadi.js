// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let tiradado = document.getElementById("playdado");
let risultatoDado = document.getElementById("risultato");
let risultato = document.createElement("div");

let playdado = function () {
  const giocatore = Math.floor(Math.random() * 6 + 1);
  const cpu = Math.floor(Math.random() * 6 + 1);

  if (giocatore > cpu) {
    risultato.innerHTML = "Il GIOCATORE vince col numero: " + giocatore;
  } else if (giocatore < cpu) {
    risultato.innerHTML = "La CPU vince col numero:  " + cpu;
  } else {
    risultato.innerHTML = "Avete pareggiato";
  }
};
tiradado.addEventListener("click", playdado);
risultatoDado.append(risultato);
