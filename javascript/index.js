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