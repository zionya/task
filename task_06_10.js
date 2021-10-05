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
//console.log (getFibonacci(5));

function getAreaRectangle(length, width){

    return length*width;

}

//console.log(getAreaRectangle(5, 6));

function getPerimeterRectangle (length, width){

    return 2*length + 2*width;

}

// console.log(getPerimeterRectangle(5, 6));

function getAreaTriangle (side1, side2, side3){

    let semiPerimeter = (side1 + side2 + side3)/2;
    
    return Math.sqrt(semiPerimeter*(semiPerimeter - side1)*(semiPerimeter - side2)*(semiPerimeter - side3)); 

}

//console.log(getAreaTriangle (3, 4, 5))

function getPerimeterTriangle (side1, side2, side3){

    return side1 + side2 + side3;

}

//console.log(getPerimeterTriangle(2,3,4));

function getAreaCircle (radius){

    return Math.PI*radius*radius; 

}

//console.log(getAreaCircle(4))

function getLengthCircle (radius){

    return 2*Math.PI*radius;

}
//console.log(getLengthCircle(10))

function getFactorial(num){
    
    let factorial = 1;

    for(let i = 0; i < num; i++){
        factorial = factorial*(i + 1);
    }

    return factorial;
}

//console.log(getFactorial(2));

function getSumMultipleOf2(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i]%2 === 0 ) sum += arr[i];

    }

    return sum;
}

//console.log (getSumMultipleOf2([-2, 4, 6, 7, 8, 9, 10, 12, 20, 21]));

function getSumMultipleOf3(arr){

    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i]%3 === 0 ) sum += arr[i];
    }

    return sum;
}

//console.log (getSumMultipleOf3([2, 4, 6, 7, 8, 9, 10, 12, 20, 21]));

function getSumPositive(arr){
    
    let sum = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > 0 ) sum += arr[i];

    }

    return sum;
}

//console.log (getSumPositive([-2, 4, 6, -7, 8, -9, 10, 12, -20, 21]));


function getSumOdd(arr){
    
    let sum = 0;

    for(let i = 0; i < arr.length; i++){

        if(Math.abs(arr[i]%2) > 0 ) sum += arr[i];

    }

    return sum;
}

//console.log (getSumOdd([-2, 4, 6, -7, 8, -9, 10, 12, -20, 21]));

function getCountedElemZero(arr){

    let counter = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === 0 ) counter++;

    }

    return counter;

}

//console.log (getCountedElemZero([-2, 0, 0, 6, 0, 8, 0, 10, 0, -20, 21]));


function getCountedElemNegative(arr){

    let counter = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] < 0 ) counter++;

    }

    return counter;

}

//console.log (getCountedElemNegative([-2, 0, 0, 6, 0, 8, 0, 10, 0, -20, 21]));

function getCountedElemPositive(arr){

    let counter = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > 0 ) counter++;

    }

    return counter;

}

//console.log (getCountedElemPositive([-2, 0, 0, 6, 0, 8, 0, 10, 0, -20, 21, 4]));


function getCountedElemPrame(arr){

    let counter = 0;

    function isPrimeNumber(num){

        let counter = 0;

        if (num < 2){
            return false;
        }

        for (let i = 1; i < num; i++){

            if(num%i === 0) counter++;

        }

        if(counter > 1) return false;

        return true;
    }

    for(let i = 0; i < arr.length; i++){

        if(isPrimeNumber(arr[i])) counter++;

    }

    return counter;

}

console.log (getCountedElemPrame([2, 11, 0, 3, 0, 8, 0, 7, 0, -5, 21, 4]));
