// Es 97(console.log document):

console.log("il DOM è: ", document);

//Es 98(get element by id):

const headerElement = document.getElementById('header');
console.log('Elemento selezionato tramite getElementById:', headerElement);


const headerSelector = document.querySelector("#header");
console.log(`L'elemento selezionato tramite querrySelector è : `, headerSelector);