"use strict"

function getFibonacci(num) {

    let first = 0;
    let second = 1;
    let fibonacci = [];

    if (num < 1) {
        return fibonacci;
    } 

    fibonacci.push(first);

    if (num < 2) {
        return fibonacci;
    }

    fibonacci.push(second);

    for (let i = 2; i < num; i++) {

        let nextNumber = first + second;
        fibonacci.push(nextNumber);
        first = second;
        second = nextNumber;

    }

    return fibonacci;

}
//console.log(getFibonacci(3));

let rectangle = {

    height: 5,
    width: 6,
    square() {
        return this.height * this.width;    
    },
    perimeter() {
        return 2 * this.height + 2 * this.width;
    },

}

//console.log(rectangle.square());
//console.log(rectangle.perimeter());

let triangle = {

    side1: 3,
    side2: 4,
    side3: 5,
    square() {

        let semiPerimeter = (this.side1 + this.side2 + this.side3) / 2;
    
        return Math.sqrt(semiPerimeter * (semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3)); 
  
    },
    perimeter() {
        return this.side1 + this.side2 + this.side3
    },

}

//console.log(triangle.square())
//console.log(triangle.perimeter())

let circle = {

    radius: 4,
    square() {
        return Math.PI * this.radius * this.radius;
    },
    length() {
        return 2 * Math.PI * this.radius;
    },

}

//console.log(circle.square());
//console.log(circle.length())

function getFactorial(num) {
    
    let factorial = 1;

    for (let i = 0; i < num; i++) {

        factorial = factorial * (i + 1);

    }

    return factorial;

}

//console.log(getFactorial(5));

function getSumMultipleOf2(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;

}

//console.log (getSumMultipleOf2([-2, 4, 6, 7, 8, 9, 10, 12, 20, 21]));

function getSumMultipleOf3(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 3 === 0) {
            sum += arr[i];
        } 

    }

    return sum;
}

//console.log (getSumMultipleOf3([2, 4, 6, 7, 8, 9, 10, 12, 20, 21]));

function getSumPositive(arr) {
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            sum += arr[i];
        }

    }

    return sum;

}

//console.log (getSumPositive([-2, 4, 6, -7, 8, -9, 10, 12, -20, 21]));


function getSumOdd(arr) {
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if(Math.abs(arr[i] % 2) > 0) {
            sum += arr[i];
        } 

    }

    return sum;

}

//console.log (getSumOdd([2, 4, 6, 7, 8, 9, 10, 12, 20, 21]));

function getCountedZeroElem(arr) {

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] === 0) {
            counter++;
        } 

    }

    return counter;

}

//console.log (getCountedZeroElem([-2, 0, 0, 6, 0, 8, 0, 10, 0, -20, 21]));


function getCountedNegativeElem(arr) {

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            counter++;
        } 

    }

    return counter;

}

//console.log (getCountedNegativeElem([-2, 0, 0, 6, 0, 8, 0, 10, 0, -20, 21]));

function getCountedPositiveElem(arr) {

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] > 0) {
            counter++;
        } 

    }

    return counter;

}

//console.log (getCountedPositiveElem([-2, 0, 0, 6, 0, 8, 0, 10, 0, -20, 21, 4]));


function getCountedPrameElem(arr) {

    let counter = 0;

    function isPrimeNumber(num) {

        let counter = 0;

        if (num < 2) {
            return false;
        }

        for (let i = 1; i < num; i++) {

            if (num % i === 0) {
                counter++;
            }

        }

        if (counter > 1) {
            return false;
        } 

        return true;

    }

    for (let i = 0; i < arr.length; i++) {

        if ( isPrimeNumber(arr[i]) ) {
            counter++;
        } 

    }

    return counter;

}

//console.log (getCountedPrameElem([2, 11, 0, 3, 0, 8, 0, 7, 0, 5, 21, 4]));
