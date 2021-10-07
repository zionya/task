"use strict"

function getNumberBinarySys(num) {

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

 // console.log(getNumberDecimalSys("1111"));

 function getSumMultipleOf2DoubleArr(arr) {

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

//console.log (getSumMultipleOf2DoubleArr([[2, 4], [6, 7], [8, 9], [10, 12], [20, 21]]));


function getSumMultipleOf3DoubleArr(arr) {

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

//console.log (getSumMultipleOf3DoubleArr([[2, 4], [6, 7], [8, 9], [10, 12], [20, 21]]));

function getSumPositiveDoubleArr(arr) {
    
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

//console.log (getSumPositiveDoubleArr([[2, -4], [6, -7], [8, -9], [10, -12], [20, -21]]));


function getSumOddDoubleArr(arr) {
    
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

//console.log (getSumOddDoubleArr([[2, 4], [6, 7], [8, 9], [10, 12], [20, 21]]));

function countedZeroElemDoubleArr(arr) {

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

//console.log (countedZeroElemDoubleArr([[2, 4], [0, 7], [8, 0], [10, 0], [20, 21]]));


function countedNegativeElemDoubleArr(arr) {

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

//console.log (countedNegativeElemDoubleArr([[2, -4], [0, -7], [8, 0], [10, 0], [-5, 21]]));

function countedPositiveElemDoubleArr(arr) {

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

//console.log (countedPositiveElemDoubleArr([[2, -4], [0, -7], [8, 0], [10, 0], [-5, 21]]));


function countedPrameElemDoubleArr(arr) {

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

//console.log (countedPrameElemDoubleArr([[2, -4], [0, 7], [8, 0], [10, 0], [5, 21]]));

function countedSum(min, max) {
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

//console.log(countedSum(1, 5));


function countedSumMultiplу3(min, max) {
    let sum = 0;

    for (let i = min; i <= max; i++) {

        if (i % 3 === 0) {
            sum += i;    
        }
        
    }

    return sum;
}

//console.log(countedSumMultiplу3(1,9));

function countedSumPositive(min, max) {
    let sum = 0;

    for (let i = min; i <= max; i++) {

        if (i > 0) {
            sum += i;    
        }
        
    }

    return sum;
}

//console.log(countedSumPositive(-5, 5));

function getAverage(arr) {

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

//console.log( getAverage([1, 2, 3, 4, 5, 6, 7]));


function getAverageDoubleArr(arr) {

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

//console.log( getAverageDoubleArr([[1, 2], [3, 4], [5, 6], [7, 5]]) );

function getAverageEven(arr) {

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

//console.log( getAverageEven([1, 2, 3, 4, 5, 6, 7]));


function getAverageEvenDoubleArr(arr) {

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

//console.log (getAverageEvenDoubleArr ([[1, 2], [3, 4], [5, 6], [8, 5]]));



function getAverageOdd(arr) {

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

///console.log( getAverageOdd([1, 2, 3, 4, 5, 1, 7]));


function getAverageOddDoubleArr(arr) {

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

//console.log (getAverageOddDoubleArr ([[1, 2], [3, 4], [5, 6], [8, 5]]));

