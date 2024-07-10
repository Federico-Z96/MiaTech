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




