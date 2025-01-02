const fibonacci = function(num) {

    let num1 = 1;
    let num2 = 1;
    let sum;
    let parsed;
    if (typeof num !== "number"){
        parsed = parseInt(num)

    } else { 
        parsed = num}
    
    if (parsed === 1) {
        return num1;
    } else if (parsed === 0){
        return 0;
    }
    else if (parsed === 2) {
        return num2;
    } else if (parsed < 0 ) {
        return "OOPS";
    }
    else {
        for (let i = 3; i <= parsed; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
