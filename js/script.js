// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// 1) mail con array.
const mailUtenti = ["abc@gmail.com", "def@gmail.com", "ghi@gmail.com"];
let button = document.getElementById("login");
// 2) chiedo all'utente la sua mail
let val = document.getElementById("risposta");

// 3) controllo mail
let mailvalidator;
const valid = function () {
  let askMail = document.getElementById("mail");
  let mailvalidator;

  for (let i = 0; i < mailUtenti.length; i++) {
    if (askMail.value === mailUtenti[i]) {
      mailvalidator = true;
    }
  }
  val.innerHTML = "";
  let risposta = document.createElement("risposta");

  if (mailvalidator) {
    val.className = "risposta";
    val.innerHTML = " Email corretta, autenticazione in corso...";
  } else {
    val.className = "risposta";
    val.innerHTML = " Errore, mail non registrata";

    val.append(risposta);
  }
};

// 4) funzione per tasto login
login.addEventListener("click", valid);
