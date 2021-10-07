"use strict"

function getNumberBinarySys(num) {

    if (typeof(num) !== 'number') {
        return [];
    }

    let binary = [];
    let numberDecimal = num;

    while (numberDecimal > 1) {

        binary.unshift(numberDecimal % 2);
        numberDecimal = Math.floor(numberDecimal / 2);

        if (numberDecimal == 1) {
            binary.unshift(numberDecimal);
        } 

    }

    return Number(binary.join(""));
}

//console.log(getNumberBinarySys(14));

function getNumberDecimalSys(num) {

    if (typeof(num) !== 'number' && typeof(num) !== 'string') {
        return [];
    }

    function pow(num, pow) {

      let result = 1;

      for (let i = 0; i < pow; i++) {

        result *= num;

      }

      return result;
    }


    let decimal = 0; 
    let binary = num.toString();

    for (let i = 0; i < binary.length; i++) {
        
        if (binary[i] > 0) {
            decimal += pow(2, (binary.length - i - 1));
        }
    }

    return decimal;
  
}

 //console.log(getNumberDecimalSys("1111"));

 function countSumMultipleOf2DoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] % 2 === 0) {
                sum += arr[i][j];
            }

        }

    }

    return sum;

}

//console.log (countSumMultipleOf2DoubleArr([[2, 4], [6, 7], [8, 9], [10, 12], [20, 21]]));


function countSumMultipleOf3DoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] % 3 === 0) {
                sum += arr[i][j];
            }

        } 

    }

    return sum;
}

//console.log (countSumMultipleOf3DoubleArr([[2, 4], [6, 7], [8, 9], [10, 12], [20, 21]]));

function countSumPositiveDoubleArr(arr) {
  
    if (!Array.isArray(arr)) {
        return [];
    }
  
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] > 0) {
                sum += arr[i][j];
            }

        }

    }

    return sum;

}

//console.log (countSumPositiveDoubleArr([[2, -4], [6, -7], [8, -9], [10, -12], [20, -21]]));


function countSumOddDoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (Math.abs(arr[i][j] % 2) > 0) {
                sum += arr[i][j];
            }

        } 

    }

    return sum;

}

//console.log (countSumOddDoubleArr([[2, 4], [6, 7], [8, 9], [10, 12], [20, 21]]));

function countZeroElemDoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] === 0) {
                counter++;
            }

        } 

    }

    return counter;

}

//console.log (countZeroElemDoubleArr([[2, 4], [0, 7], [8, 0], [10, 0], [20, 21]]));


function countNegativeElemDoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] < 0) {
                counter++;
            }

        } 

    }

    return counter;

}

//console.log (countNegativeElemDoubleArr([[2, -4], [0, -7], [8, 0], [10, 0], [-5, 21]]));

function countPositiveElemDoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] > 0) {
                counter++;
            }

        } 

    }

    return counter;

}

//console.log (countPositiveElemDoubleArr([[2, -4], [0, -7], [8, 0], [10, 0], [-5, 21]]));


function countPrameElemDoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

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

        for (let j = 0; j < arr[i].length; j++) {

            if ( isPrimeNumber(arr[i][j]) ) {
                counter++;
            }

        }

    }

    return counter;

}

//console.log (countPrameElemDoubleArr([[2, -4], [0, 7], [8, 0], [10, 0], [5, 21]]));

function countSum(min, max) {

    if (typeof(min) !== "number" || typeof(max) !== "number") {
        return [];
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

//console.log(countSum(1, 5));


function countSumMultiplу3(min, max) {
 
    if (typeof(min) !== "number" || typeof(max) !== "number") {
        return [];
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {

        if (i % 3 === 0) {
            sum += i;    
        }
        
    }

    return sum;
}

//console.log(countSumMultiplу3(1, 9));

function countSumPositive(min, max) {
 
    if (typeof(min) !== "number" || typeof(max) !== "number") {
        return [];
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {

        if (i > 0) {
            sum += i;    
        }
        
    }

    return sum;
}

//console.log(countSumPositive(-5, 5));

function countAverage(arr) {
    
    if (!Array.isArray(arr)) {
        return [];
    }
    
    let counter = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        counter ++;
        sum += arr[i];

    }

    if (counter === 0) {

        return 0;

    }

    return sum / counter;

}

//console.log( countAverage([1, 2, 3, 4, 5, 6, 7]));


function countAverageDoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i].length; j++){
            counter++;
            sum += arr[i][j];    
        }

    }

    if (counter === 0) {

        return 0;

    }

    return sum / counter;

}

//console.log( countAverageDoubleArr([[1, 2], [3, 4], [5, 6], [7, 5]]) );

function countAverageEven(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {
            counter ++;
            sum += arr[i];    
        }

    }

    if (counter === 0) {

        return 0;

    }

    return sum / counter;

}

//console.log( countAverageEven([1, 2, 3, 4, 5, 6, 7]));


function countAverageEvenDoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i].length; j++){

            if (arr[i][j] % 2 == 0) {
                counter++;
                sum += arr[i][j];    
            }

        }

    }

    if (counter === 0) {

        return 0;

    }

    return sum / counter;

}

//console.log (countAverageEvenDoubleArr ([[1, 2], [3, 4], [5, 6], [8, 5]]));



function countAverageOdd(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 > 0) {
            counter++;
            sum += arr[i];    
        }

    }

    if (counter === 0) {

        return 0;

    }

    return sum / counter;

}

//console.log( countAverageOdd([1, 2, 3, 4, 5, 1, 7]));


function countAverageOddDoubleArr(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] % 2 > 0) {
                counter++;
                sum += arr[i][j];    
            }
        }

    }

    if (counter === 0) {

        return 0;

    }

    return sum / counter;

}

//console.log (countAverageOddDoubleArr ([[1, 2], [3, 4], [5, 6], [8, 5]]));

