// Es 97(console.log document):

console.log("il DOM è: ", document);

//Es 98(get element by id):

const headerElement = document.getElementById('header');
console.log('Elemento selezionato tramite getElementById:', headerElement);

//Es 99(querryselector):
const headerSelector = document.querySelector("#header");
console.log(`L'elemento selezionato tramite querrySelector è : `, headerSelector);

//Es 100(innerText):

const inner = document.getElementById("innerText");
inner.innerText = "testo sostituito correttamente";

//Es 101(modificare lo style):

let p = document.querySelector("#testo");
p.style.backgroundColor = "purple";
p.style.fontSize = "25px";

//Es 102(innerHTML):


let par = document.getElementById("testo");
par.innerHTML += "<button>Click here</button>";

//Es 103(createElement):

let list = document.createElement("ul");

for(let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = i;

    list.appendChild(li);
};

document.body.appendChild(list);

//Es 104(creazione di un form):

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    let nome = document.getElementById("nome").value.trim();                  //value ---> ottiene il valore inserito dall'utente
    let cognome = document.getElementById("cognome").value.trim();            //trim ---> per eliminare gli spazi all'inizio alla fine

    if (nome === '' || cognome === '') {
        alert('compila entrambi i campi: Nome e Cognome.');
        event.preventDefault();                                                // Impedisce l'invio del form
    } else {
        alert('Form inviato correttamente!'); 
    }

});

