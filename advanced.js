"use strict"

Function.prototype.myBind = function(obj, ...args) {
    let key = Symbol();
    obj[key] = this;

    return function (...param) {
        return obj[key](...args, ...param);
    };
};

Function.prototype.myCall = function(obj, ...args) {
    let key = Symbol();
    obj[key] = this;

    return obj[key](...args);
};

/*let bolex = { userName: "Bolex" };
let bolexS = greeting.myBind(bolex);
function greeting(greeting, punctuation) {
    return `${greeting} ${this.userName}${punctuation}`;
}
console.log(bolexS("Hello ", "?"));*/

Array.prototype.myMap = function(compare) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(compare(this[i]));
    }
    return result;
};

Array.prototype.myFilter = function(compare, thisArg) {
    thisArg = thisArg || this;
    let result = [];

    for (let i = 0; i < thisArg.length; i++) {
        if (compare(thisArg[i])) {
            result.push(thisArg[i]);
        }
    }
    return result;  
};

Array.prototype.myReduce = function(compare, initialValue) {
    let accumulator = (initialValue === undefined) ? this[0] : initialValue;
    let start = (initialValue === undefined) ? 1 : 0;

    for (let i = start; i < this.length; i++) {
        accumulator = compare(accumulator, this[i]);
    }
    return accumulator;
};

Array.prototype.myForEach = function(compare, thisArg) {
    thisArg = thisArg || this;

    for(let i = 0; i < thisArg.length; i++) {
        compare(thisArg[i]);
    }
};

function* fibonacci(){
    let first = 0;
    let second = 1;

    while (true){
        let current = first;
        first = second;
        second = first + current;
        let reset = yield current;

        if (reset) {
            first = 0;
            second = 1;
        }
    }
}
  
/*let sequence = fibonacci();




  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
  console.log(sequence.next().value);     // 3
  console.log(sequence.next().value);     // 5
  console.log(sequence.next().value);     // 8
  console.log(sequence.next().value);     // 13
  console.log(sequence.next().value); // 1
*/

let myIterable = {
    first: 0,
    second: 1,
    [Symbol.iterator]() {
        let first = 0;
        let second = 1;
    
        while (true){
            let current = first;
            first = second;
            second = first + current;
            let reset = yield current;
    
            if (reset) {
                first = 0;
                second = 1;
            }
        }
    },
};

for (let num of range) {
    console.log(num);
}

//[...myIterable] // [1, 2, 3]


