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

let {titol, data} = oggetto;
console.log("il titolo è: " + titol);
console.log("la data è: " + data);

//Es 48(destructuring con nomi di variabili diversi):

let {titol: nome, data: anno} = oggetto;

console.log("il titolo è: " + nome);
console.log("la data è: " + anno);

//Es 49(destrutturing con valori predefiniti):

let locandina = {
    titolo: "ristarnte Tal dei Tali",
    numeroTelefono: 322111888,
    annoApertura: 1940,                                                              //in un oggetto s euna proprietà è senza valore restituirà undefined
    descrizione: "Siamo un ristorante e siamo bravi"
};

let { titolo , numeroTelefono, annoApertura = 1946 , descrizione } = locandina;

console.log(titolo + " chiamaci al " + numeroTelefono + ", siamo un'attività che soddisfa i clienti dal " + annoApertura + "; " + descrizione);

//Es 50(spread operator, copia array):

const arrNum = [1, 12, 21];
let copiaArrNum = [...arrNum];

console.log(`array di partenza ${arrNum}`);
console.log(`array copiato ${copiaArrNum}`);

//Es 51(spread operator, unire due array):

const arrNum2 = [3, 4, 34, 43];
copiaArrNum =[...arrNum, arrNum2];

console.log(`primo array: ${arrNum}, secondo array: ${arrNum2}`);
console.log(`somma degli array: ${copiaArrNum}`);

//Es 52(spread operator copia di un oggetto):

const scrivania = {
    pc : "hp",
    schermo : "samsung",
    caricatore : "wireless",
    penne : 5
};
console.log(`cos'avevo sulla scrivania ieri? ${Object.values(scrivania)}`);

const scrivaniaOggi = {...scrivania, 
    lampada : "ikea",
    mouse : "asus"
};

console.log(`cos'ho oggi sulla scrivania? ${Object.values(scrivaniaOggi)}`);