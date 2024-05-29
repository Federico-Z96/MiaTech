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