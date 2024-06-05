//Es 21(funzioni annidate):
function outerFunction() {
    function innerFunction(x, y) {
        let sum = x + y;
        return sum;
    }
    return innerFunction;
};

console.log(outerFunction()(3, 5));