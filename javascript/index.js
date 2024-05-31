//Es 1: 
let num1 = 10;
const num2 = "15";

console.log(num1, num2);

//Es 2:
let num3 = 96;

console.log(num3);

num3 = num1 + parseInt(num2);
console.log(num3);

//Es 3:                                                                                       Scope Delle Variabili
let number = 100;     //scope globale=definita globalmente all'internodel nostro file         la variabile number all'interno delle parentesi 
{let number = 15;    // scope locale= disponibile solo all'interno del codice tra graffe      esisterà e avrà quel valore solo li
    console.log(number)            // quindi disponibile localmente
}
console.log(number);

//Es 4 :

let outside = 19;                               // non potra essere in alcun modo utilizzata
{let inside = 96;                               // questa variabile all'esterno del blocco
    console.log(outside, inside);
}
console.log(outside,/*inside*/);   

//Es 5:
const arr1 = [];
const arr2 = [];
for (let i = 0; i <= 20; i++) {            // indentazione del ciclo per iterare si parte dal valore 0 per arrivare al valore 20 addizzionandolo ogni volta di 1
    
    if(i % 2 == 0){                        // if necessario per la verifica dei numeri, da filtrare e inserire successivamente nell'array solo i pari
        arr1.push(i);
    }else {                                //else determina la condizione in questo caso die numeri dispari inserendoli in un altro array
        arr2.push(i);
    }
    

}
console.log("pari: " + arr1 , "dispari: " +  arr2);

const arr3 =[];
for (let i = 0; i <= 20; i = i + 2) {                //raramente si usera addizionare a i + 2 
    arr3.push(i);                                    //si può scrivere anche i += 2
}
console.log(arr3);

//Es 6:
/* 
let ii = 10 ;                           // while = iterazione che verrà interrotta appena sarà falsa la condizione
const arrDispari = [];
while(ii >= 1){                         // dichiarazione condizione, il ciclo verrà effettutato 
    if(ii % 2 !== 0){                   // fintanto che la condizione sarà true 
        arrDispari.push(ii);
    } 
    ii--;                               // incremento o decremento è sempre necessario per evitare un loop 
}
console.log(arrDispari);
*/
//Es 7:

//let word = prompt("inserisci una parola");      // prompt crea  una finestra di dialogo che richiede all'utente di inserire un valore.

//console.log(word);

//Es 8:
//console.log(word.length);                  //per verificare la lunghezza della parola inserita dall'utente

//Es 9:
/*let word ;
do {
 word = prompt("insericsci una parola").trim();    // .trim metodo per eliminare gli spazi all'inizio e alla fine
}while(word.length <= 5)
    console.log(word);
*/

//Es 10:

if( number > 5 ) {
    console.log("la variabile è maggiore di 5");
}else {
    console.log("la variabile è minore di 5");
}

//Es 11:
/*let score = parseInt(prompt("inserisci numero"));

if(score >= 90 && score <= 100 ) {
    console.log("voto ottimo");
}else if( score >= 70 && score <=89) {
    console.log("voto buono");
}else if( score >= 60 && score <=69){
    console.log("voto sufficiente");
}else if(score <= 59 ) {
    console.log("voto insufficiente");
} else {
    console.log("non è un numero");
}
*/

//Es 12:

       /*score è la variabile di controllo*/
/*switch (typeof score === "number") {    // type of andrà a verificare che il valore inserito nel prompt sia un numero
    case (score >= 90 && score <= 100) :     //case è accompagnato dal valore della variabile di controllo 
        console.log("voto ottimo");          // e dal codice che dovra essere eseguito se la variabile ha tale valore
        break;                            // una volta trovata una corrispondenza  break salterà gli altri casi arrivando alla fine dello switch
    case (score >= 70 && score <=89) :
        console.log("voto buono");
        break;
    case (score >= 60 && score <=69) :
        console.log("voto sufficiente");
        break;
    case (score <= 59 ) :
        console.log("voto insufficiente");  
        break;
    default :                                   // valore che verrà eseguito quando non trova nessuna corrispondenza con i casi 
        console.log("non è un numero");
}
*/
//Es 13:

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayNumbers);

//Es 14:

let tot = 0;                                          //variabile a cui verrà successivamente il for attribuita la somma, si inizializza con valore 0
for(let i = 0; i < arrayNumbers.length; i++) {        //parametro comprende una variabile che ciclera tutti gli elementi del nostro array grazie al .length
    tot = tot + arrayNumbers[i];                      // una volta ciclato il numero verà quindi sommato al numero precedente fino alla fine del ciclo
    
}
console.log(tot);

//Es 15:
const arrReverse = [];
for(let i = arrayNumbers.length-1; i >= 0 ; i--) {   // length-1 perchè dobbiamo lavorare con gli indici e length ci dirà quanti valori abbiamo nel nostro array
    arrReverse.push(arrayNumbers[i]);                // dobbiamo pushare nel nostro nuovo array gli elementi contenuti in arrayNumbers 
}
console.log(arrReverse);

//Es 16:

/*const parole = [];

for (let i = 0; i < 5; i++){
    let score2 =prompt("scrivi qui:");
    parole.push(score2);
};
console.log("parole: ", parole);

const paroleDispari = [];

for (let i = 0; i < parole.length; i++ ){
    if (i % 2 !== 0) {
        paroleDispari.push(parole[i]);
    }
};

console.log(paroleDispari);
*/
//Es 17:

const person = {
    name: "franco",
    age: "20",
    city: "Campo Basso"
};

console.log(person.age);