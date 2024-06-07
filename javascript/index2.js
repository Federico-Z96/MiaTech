//Es 21(funzioni annidate):
/*function outerFunction(x) {
    function innerFunction(y) {
        let sum = x + y;
        return sum;
    }
    return innerFunction;
};

console.log(outerFunction()(3, 5));*/

//Es 22 modifica outerFunction:

function outerFunction(initialValue) {
    let result = initialValue;
    function innerFunction(y) {
       result += y;
       return result;
    }
    return innerFunction;
};
console.log(outerFunction(5)(4));

//Es 23(counter):
function createCounter(){
    let count = 0;
    return {
        increment : function() {
            count++;
            return count
        },
        decrement : function(){
            count--;
            return count;
        }
    }
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

//Es 24:

const student = {
    name : "franco",
    age : 17,
    grade : "superiori",
    school : "scuola media"
};

console.log(Object.keys(student));

//Es 25:


console.log(Object.values(student));

//Es 26:

console.log(Object.entries(student));

//Es 27:

const numbers = [ 1, 2, 3, 4, 5 ];

numbers.forEach(numbers => {                   //forEach va a creare un iterazione di tutti gli elementi di numers, andandoli a moltiplicare per 2 prima di vederli rappresentati in console
    console.log(numbers * 2);
});

const squaredNumbers = numbers.map(numbers => numbers * numbers);  // map va ad attribuire gli elementi di numbers al quadrato al nuovo array creato(squaredNumbers)

console.log(squaredNumbers);