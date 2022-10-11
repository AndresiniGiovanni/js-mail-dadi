// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const numerorandom = [];
const numeriDaGenerare = 1;
let check = false;
for (let i = 1; i <= numeriDaGenerare; i++) {
  let numerogenerato = Math.floor(Math.random() * (6)) 
  for (let n = 0; n < numerorandom.lenght; n++) {
    if (numerogenerato == numerorandom[n]) {
      check = true;
    }
  }

  if (!check) {
    numerorandom.push(numerogenerato);
  }
}

console.log(numerorandom);
