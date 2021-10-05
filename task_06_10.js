"use strict"

function getFibonacci (num){

    let first = 0;
    let second = 1;
    let fibonacci = [first, second];

    if (num < 1) return 0;

    if (num == 1){
        return fibonacci;
    }

    for (let i = 1; i < num; i++){
        let nextNumber = first + second;
        fibonacci.push(nextNumber);
        first = second;
        second = nextNumber;
    }
    return fibonacci;

}
//console.log (getFibonacci(5))


