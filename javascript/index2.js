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