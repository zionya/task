"use strict"

function isAnogramma(firstWord, secondWord, index) {

    index = index || 0;

    let firstWordLower = firstWord.toLowerCase();
    let secondWordLower = secondWord.toLowerCase();

    let result = false;

    if (firstWordLower.length !== secondWordLower.length) {
        
        return result;

    }
    
    function checkLetters(word1, word2, indexI, index) {

        index = index || 0;
        indexI = indexI || 0;

        let count = {
            "i": 0,
            "j": 0,
        };

        if (++index <= word1.length) {

            count = checkLetters(word1, word2, indexI, index);
            --index;

            if (word1[indexI] === word1[index]) {
                count["i"]++;
            }

            if (word1[indexI] === word2[index]) {
                count["j"]++;
            }
        }
        
        if (index > 0) {

            return count;

        }

            return count["i"] === count["j"];

    }

    if (++index <= firstWordLower.length) {

        result = checkLetters(firstWordLower, secondWordLower, index);
        
    }
    
    return result;

}

function countNumber(num, index) {

    index = index || 0;
    let numberArr = getSeparateNumber(num);
    let countNumbersArr = [];
    let result = [];

    function getSeparateNumber(num) {

        let result = [];
        let numberSeparate = num;

        if (numberSeparate > 0) {

            result = getSeparateNumber( Math.floor(numberSeparate / 10) );
            result.push(numberSeparate % 10);

        }
        
        return result;

    }

    function getCount(arr, indexI, index) {

        index = index || 0;
        indexI = indexI || 0;
        
        let count = 0;

        if (++index <= arr.length) {

            count = getCount(arr, indexI, index);
           --index;

            if (arr[indexI] === arr[index]) {

                count++;

            }
         }
       
        return count;

    }

    if (++index < numberArr.length) {

        countNumbersArr = countNumber(num, index);
        
    }

    countNumbersArr.unshift( getCount(numberArr, --index) );

    if (index > 0) {
        return countNumbersArr;
    }

    let countedNumbers = {};

    for (let i = 0; i < numberArr.length; i++) {

        countedNumbers[numberArr[i]] = countNumbersArr[i];

    }
        
    return countedNumbers;
    
}

function countUnigueWords(str, index) {

    index = index || 0;

    if (typeof(str) !== "string" || str === "") {
        return null;
    }

    function isUnigueWord(arr, indexI, index) {

        index = index || 0;

        let result = true;

        if (index < arr.length) {

            result = isUnigueWord(arr, indexI, ++index);
            --index;
            if (arr[indexI] === arr[index]) {

                if (indexI !== index) {
                    result = false;
                }

            }
        }
        
        return result;
    }

    let wordsArr = str.toLowerCase().split(" ");
    let count = 0;

    if (index < wordsArr.length) {

        count = countUnigueWords(str, ++index);

        if ( isUnigueWord(wordsArr, --index) ) {

            count++;

        }

    }
    
    return count;

}

function countWords(str, index) {

    index = index || 0;

    let wordsArr = str.toLowerCase().split(" ");
    let result = {};

    if (++index <= wordsArr.length) {

        result = countWords(str, index);

        --index;

        if ( result[wordsArr[index]] === undefined ) {

            result[wordsArr[index]] = 1;
    
        } else {
    
            result[wordsArr[index]]++;
    
        }
                
    }
        
    return result;
    
}

function getFibonacci(num) {

    num = num || 0;

    let first = 0;
    let second = 1;

    let fibonacci = [];

    if (num < 1) {

        return fibonacci;

    }

    if (--num > 0) {

        fibonacci = getFibonacci(num);

    }
    
    if (num == 0) {

        fibonacci.push(first);

    } else if (num == 1) {

        fibonacci.push(second);

    } else {

        fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
       
    }
    
    return fibonacci;

}

function getFactorial(num) {
    
    num = num || 0;

    let factorial;

    if (num > 0) {

        factorial = getFactorial(--num);

    } else {

        factorial = 1;

    }

    return factorial * (++num);

}

Array.prototype.sum = function (compare, index) {

    index = index || 0;
    let result = 0;

    if (index < this.length) {
    
        result = this.sum(compare, ++index);
        --index;      

    }
    
    if (compare(this[index])) {
        
        result += this[index];

    }

    return result;

};

Array.prototype.countElem = function(compare, index) {
    
    index = index || 0;
    let counter = 0;

    if (index < this.length) {
    
        counter = this.countElem(compare, ++index);
        --index;      

    }
    
    if (compare(this[index])) {
        
        counter++;

    }

    return counter;

};

function getNumberBinarySys(num) {

    let numberDecimal = Number(num) || 0;
    let binary = [];
    
    if (numberDecimal > 1) {
    
        binary = getNumberBinarySys( Math.floor(numberDecimal / 2));

    }
        
    binary.push(numberDecimal % 2);

    return binary;
}

function getNumberDecimalSys(num, index) {

    num = num || 0;
    index = index || 0;

    function myPow(num, pow, index) {

        index = index || 0;
        let result = 1;

        if (pow == 0) {

            return result;

        }

        if (++index < pow) {
            
            result = myPow(num, pow, index);
            --index;

        }
        
        result *= num;

        return result;
    }


    let decimal = 0; 
    let binary = num.toString();

    if (index < binary.length) {

        decimal = getNumberDecimalSys(num, ++index);
        --index;

    }
    if (binary[index] > 0) {

        decimal += myPow(2, (binary.length - index - 1));

    }

    return decimal;
  
}

Array.prototype.sumDoubleArr = function(compare, indexI, indexJ) {

    indexI = indexI || 0;
    indexJ = indexJ || 0;

    let sum = 0;

    if (indexI < this.length) {
                
        if (indexJ < this[indexI].length) {
            
            sum = this.sumDoubleArr(compare, indexI, ++indexJ);
            --indexJ;
        
            if ( compare(this[indexI][indexJ]) ) {

                sum += this[indexI][indexJ];

            }

            return sum;
        
        }

        indexJ = 0;

        sum = this.sumDoubleArr(compare, ++indexI, indexJ);
        
    }
    
    return sum;

};

Array.prototype.countElemDoubleArr = function(compare, indexI, indexJ) {
    
    indexI = indexI || 0;
    indexJ = indexJ || 0;

    let counter = 0;

    if (indexI < this.length) {
                
        if (indexJ < this[indexI].length) {
            
            counter = this.countElemDoubleArr(compare, indexI, ++indexJ);
            --indexJ;

            if ( compare(this[indexI][indexJ]) ) {

                counter++;

            }
            
            return counter;
        
        }

        indexJ = 0;

        counter = this.countElemDoubleArr(compare, ++indexI, indexJ);
        
    }
    
    return counter;
}


function sumMinMax(min, max, compare) {

    min = min || 0;
    max = max || 0;
    
    let sum = 0;

    if (min <= max) {

        sum = sumMinMax (++min, max, compare);
        
        --min;

        if ( compare(min) ) {
            sum += min;
        }

    }

    return sum;
}

Array.prototype.avarage = function(compare, index) {

    index = index || 0;

    let result = {
        "counter": 0,
        "sum": 0,
    };

    //
    if (index < this.length) {
    
        result = this.avarage(compare, ++index);
        
        --index;   
        
        if (compare(this[index])) {
        
            result["counter"] += 1;
            result["sum"] += this[index];;
    
        }

    }
        
    if (index > 0) {

        return result;

    } 

    if (result["counter"] === 0) {

        return 0;

    }

    return result["sum"] / result["counter"];

};

Array.prototype.avarageDoubleArr = function(compare, index) {

    index = index || 0;

 
    let result = {
        "counter": 0,
        "sum": 0,
    };
    
    function sumElem(compare, arr, index) {
        
        index = index || 0;

        let result = {
            "counter": 0,
            "sum": 0,
        };

        if (++index <= arr.length) {

             result = sumElem(compare, arr, index);
             --index;

            if (compare(arr[index])) {
                
                result["counter"]++;
                result["sum"] += arr[index]; 

            }
        }
        
        return result;

    }

    if (index < this.length) {

        result = this.avarageDoubleArr(compare, ++index)
        --index;
        let sum = sumElem(compare, this[index]);
        result["counter"] += sum["counter"];
        result["sum"] += sum["sum"];

    }

    if (index > 0) {

        return result;

    }

    if (result["counter"] === 0) {

        return 0;

    }

    return result["sum"] / result["counter"];
};

function getTransposeMatrix(matrix, index) {

    if (!Array.isArray(matrix)) {
        return [];
    }
    
    function bildRow (matrix, arr, indexI, index) {
        
        index = index || 0;
        indexI = indexI || 0;
        
        let result = [];

        if (index < matrix.length) {

            result = bildRow(matrix, arr, indexI, ++index);
            --index;
            result.unshift(matrix[index][indexI]);

        }

        return result;

    }
    
    index = index || 0;
    let changedMatrix = [];

    if (index < matrix[0].length) {

        changedMatrix = getTransposeMatrix(matrix, ++index);
        changedMatrix.push( bildRow(matrix, changedMatrix, (matrix[0].length - index)) );
    }

    return changedMatrix;
}

function sumTwoMatrixs(matrix1, matrix2, index) {

    if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
        return [];
    }

    function sumRow(matrix1, matrix2, indexI, index) {

        index = index || 0;

        let result = [];

        if (index < matrix1[indexI].length) {

            result = sumRow(matrix1, matrix2, indexI, ++index);
            --index;

            result.unshift( matrix1[indexI][index] + matrix2[indexI][index] );

        }

        return result;

    }

    index = index || 0;
    let sumMatrix = [];

    if (index < matrix1.length) {

        sumMatrix = sumTwoMatrixs(matrix1, matrix2, ++index);
        --index;
        sumMatrix.unshift( sumRow(matrix1, matrix2, index) );

    }

    return sumMatrix;

}

Array.prototype.removeRow = function(compare, index) {

    function isZero(compare, arr, index) {

        index = index || 0;
        let result = false;
        
        if (index < arr.length) {

            result = isZero(compare, arr, ++index);
            --index;

            if ( compare(arr[index]) ) {

                result = true;

            }

        }

        return result;

    }

    index = index || 0;
    let changedArray = this;
    
    if (index < changedArray.length) {

        changedArray = this.removeRow(compare, ++index);

        if ( isZero(compare, changedArray[--index]) ) {

            changedArray.splice(index, 1);
           
        }
    }

    return changedArray;
};

Array.prototype.removeСolumn = function(compare, index) {

    function isZero(compare, arr, indexI, index) {
        
        index = index || 0;
        let result = false;

        if (index < arr.length) {

            result = isZero(compare, arr, indexI, ++index);

            if ( compare(arr[--index][indexI]) ) {

                result = true;

            }

        }

        return result;

    }

    function remove(arr, indexI, index) {

        index = index || 0;
        let result = arr;

        if (index < result.length) {

            result = remove(result, indexI, ++index);
            --index;
            result[index].splice(indexI, 1);

        }

        return result;

    }

    index = index || 0;
    let changedArray = this;

    if (index < changedArray.length) {

        changedArray = this.removeСolumn(compare, ++index);
        --index;

        if ( isZero(compare, changedArray, index) ) {

            changedArray = remove(changedArray, index);

        }
    }
    
    return changedArray;

};
