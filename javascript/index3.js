//Es 44(destructuring):

let arrayDiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primoNumero = arrayDiNumeri[0];
let secondoNumero = arrayDiNumeri[1];

console.log(primoNumero);
console.log(secondoNumero);



//Es 45:

let [numeroUno, , numeroTre] = arrayDiNumeri;
console.log(numeroUno, numeroTre);