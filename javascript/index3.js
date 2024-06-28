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

//Es 53(rest operator):

function sommaRest(...valori ) { 
    let sumRest = 0;
   for(i = 0; i < valori.length; i++) {
    sumRest += valori[i];
   }
    return sumRest;
};

console.log(sommaRest(1, 2, 23, 12));

//Es 54(rest operator destructuring array):

const arrNum3 = [12, 122, 212, 42];
let [uno, due, ...restantiNumeri] = arrNum3;

console.log(`i primi due numeri sono ${uno} e ${due}, i restanti numeri sono: ${restantiNumeri}`);

//Es 55(rest operator e destrutturing su oggetto):

const auto = {
    marca : "fiat",
    modello : "panda",
    anno : 2020,
    colore : "grigio antracite"
};

let {marca, modello, ...altreCaratteristiche} = auto;

console.log(`la marca è: ${marca}, il modello è: ${modello} e le altre caratteristiche sono: ${Object.values(altreCaratteristiche)}`);

//Es 56(JSON.stringify):

const tazza = {
    colore: "nero",
    manico: "ha il manico",
    termoresistente: "si"
};

console.log(JSON.stringify(tazza));

//Es 57(JSON.parse):

let jsonString = '{"colore" : "nero", "manico" : "ha il manico"}';

console.log(JSON.parse(jsonString));

//Es 57():

let jsonArr = '[{"colore" : "nero", "manico" : "ha il manico"}, {"colore" : "rosso", "manico" : "non ha il manico"}]';

let jsonVar = JSON.parse(jsonArr);

const jsonObj = {
    colore : "verde",
    manico : "non c'è il manico"
};

jsonVar.push(jsonObj);

console.log(JSON.stringify(jsonVar));

//Es 58(template literals):

let strNome = "nome";
let strCognome = "cognome";

let result = `nome : ${strNome}, cognome: ${strCognome}`;

document.write(result);

//Es 59():

let {colore, manico, termoresistente} = tazza;

let circonferenza = 23;

const nuovaTazza = `
    colore : ${colore},
    manico : ${manico},
    termoresistente : ${termoresistente},
    circonferenza : ${circonferenza}
`;

console.log(nuovaTazza);

//Es 60():

function formatPerson(persona) {
    const nuovaPersona = `
    nome : ${persona.nome},
    cognome : ${persona.cognome}
`;
return nuovaPersona;
}

const persona = {
    nome: "federico",
    cognome: "zaccaria"
};
console.log(persona);

//Es 61():

let myNumber = 42;
console.log(myNumber);

let arrMyNumber = [1, 2, 3, 23];
console.log(arrMyNumber);

//Es 61(console methods):

const controllo = (x) => {
    if(typeof x === "number"){
        console.error("non è una stringa")
    }else if(typeof x ==="string") {
        console.warn("ci siamo")
    }else {
        console.log("il dato ricevuto è corretto")
    }
}

controllo([1, 3]);

//Es 62(console methods):

const macchina = {
    marca : "audi",
    anno : 2020
};

console.group("gruppo console.");
console.table(macchina);
console.groupEnd();

//Es 63() :

const funzioneConsole = () => {
    console.log("test setTimeout")
};

setTimeout(funzioneConsole, 3000);