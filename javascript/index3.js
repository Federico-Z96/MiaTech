//Es 44(destructuring):

let arrayDiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primoNumero = arrayDiNumeri[0];
let secondoNumero = arrayDiNumeri[1];

console.log(primoNumero);
console.log(secondoNumero);

const [primoNumer, secondoNumer] = arrayDiNumeri;

console.log("Primo numero:", primoNumer);
console.log("Secondo numero:", secondoNumer);

//Es 45:

let [numeroUno, , numeroTre] = arrayDiNumeri;
console.log(numeroUno, numeroTre);

//Es 46:

const numeri = [10, 20, 30];

// Destructuring con valori predefiniti, dando valore 0 avremmo stampate anche le altre variabili
const [primoNumeroo , secondoNumeroo , terzoNumero , quartoNumero = 0, quintoNumero = 0] = numeri;

// Stampa delle variabili nella console
console.log("Primo numero:", primoNumeroo);
console.log("Secondo numero:", secondoNumeroo);
console.log("Terzo numero:", terzoNumero);
console.log("Quarto numero:", quartoNumero);
console.log("Quinto numero:", quintoNumero); 

//Es 47(destructuring di un oggetto):

let oggetto = {
    titolo : "oggetto per il destrutturing",
    data : 1996
};

let {titolo, data} = oggetto;
console.log("il titolo è: " + titolo);
console.log("la data è: " + data);

//Es 48(destructuring con nomi di variabili diversi):

let {titolo: nome, data: anno} = oggetto;

console.log("il titolo è: " + nome);
console.log("la data è: " + anno);