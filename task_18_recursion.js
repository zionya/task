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


function count(num) {

    //let numberArr = num.toString().split("");
    let numberArr = getSeparateNumber(num);
    let countNumbersArr = [];
    

    function getSeparateNumber(num) {

        let result = [];
        let numberSeparate = num;

        if (numberSeparate > 0){

            result = getSeparateNumber(Math.floor(numberSeparate / 10))

            result.push(numberSeparate % 10);
        }
        
        return result;

    }

    for (let i = 0; i < numberArr.length; i++) {

        let count = 0;

        for (let j = 0; j < numberArr.length; j++) {

            if (numberArr[i] === numberArr[j]) {

                count++;

            }

        }

        countNumbersArr.push(count);

    }

    let countedNumbers = {};

    for (let i = 0; i < numberArr.length; i++) {

        countedNumbers[numberArr[i]] = countNumbersArr[i];

    }
    
    return countedNumbers;
    
}

function countNumber(num, index) {

    index = index || 0;
    let numberArr = getSeparateNumber(num);
    let countNumbersArr = [];
    let result = [];

    function getSeparateNumber(num) {

        let result = [];
        let numberSeparate = num;

        if (numberSeparate > 0){

            result = getSeparateNumber(Math.floor(numberSeparate / 10))

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
           
            if (arr[indexI] === arr[--index]) {

                count++;

            }
            console.log( arr[indexI], arr[--index], count)
        }
       
        return count;

    }
    if (++index < numberArr.length) {

        countNumbersArr = countNumber(num, index);
        
    }
    //console.log(countNumbersArr)
    countNumbersArr.push( getCount(numberArr, index) );

    if (index > 1) {
        return countNumbersArr;
    }

    console.log("len", numberArr)
    console.log("len", countNumbersArr)

    let countedNumbers = {};

    for (let i = 0; i < numberArr.length; i++) {

        countedNumbers[numberArr[i]] = countNumbersArr[i];

    }
    
    return countedNumbers;
    
}

console.log(count(123559990));
console.log(countNumber(123559990));

function countUnigueWords(str) {

    if (typeof(str) !== "string") {
        return {};
    }

    function isUnigueWord(arr, index) {

        for (let i = 0; i < arr.length; i++) {

            if (arr[index] === arr[i]) {

                if (index !== i) {
                    return false;
                }

            }
        }
        return true;
    }

    let wordsArr = str.toLowerCase().split(" ");
    let uniqueWords = 0;

    for (let i = 0; i < wordsArr.length; i++) {
        
        if ( isUnigueWord(wordsArr, i) ) {
            uniqueWords++;
        }
                
    }

    return uniqueWords;
}

//console.log(countUnigueWords("dffd ddd ghgh dfdsf nn ddds fddgf ddd nn ddds ghgh"));

function countWords(str) {


    if (typeof(str) !== "string") {
        return {};
    }

    function isWordInArr(wordsArr, newArr, index) {

        for (let i = 0; i < newArr.length; i++) {

            if (wordsArr[index] === newArr[i]) {

                    return false;

            }
        }
        return true;
    }

    let wordsArr = str.toLowerCase().split(" ");
    let uniqueWords = [];
    let countUniqueWords = [];

    for (let i = 0; i < wordsArr.length; i++) {
        
        if (i === 0) {

            uniqueWords.push(wordsArr[i]);

        } else {

            if ( isWordInArr(wordsArr, uniqueWords, i) ) {
                uniqueWords.push(wordsArr[i]);
            }

        }

    }

    for (let i = 0; i < uniqueWords.length; i++) {

        let count = 0;

        for (let j = 0; j < wordsArr.length; j++) {

            if (uniqueWords[i] === wordsArr[j]) {

                count++;

            }
        }

        countUniqueWords.push(count);
    }

    let baseWordsCount = {};

    for (let i = 0; i < uniqueWords.length; i++) {

        baseWordsCount[uniqueWords[i]] = countUniqueWords[i];    

    }

    return baseWordsCount;
    
}

//console.log(countWords("dffd ddd ghgh dfdsf ddds fddgf ddd ddds ghgh nn"));


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

//console.log(getFibonacci(5));

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

//console.log(getFactorial(1));

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

//console.log(arr.countElem(a => a === 0));

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

        if(pow == 0) {
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

        if( compare(min) ) {
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


//console.log(arr.avarageDoubleArr(a => a % 2 === 0));
//console.log(arr.avarageDoubleArr(a => Math.abs(a % 2) > 0));

function getTransposeMatrix(matrix) {

    if (!Array.isArray(matrix)) {
        return [];
    }

    let changedMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {

        changedMatrix.push([matrix[0][i]]);

        for (let j = 1; j < matrix.length; j++) {

            changedMatrix[i].push(matrix[j][i]);

        }


    }

    return changedMatrix;
}

/*console.log(getTransposeMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]]));*/


function sumTwoMatrixs(matrix1, matrix2) {

    if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
        return [];
    }

    let sumMatrix = [];

    for (let i = 0; i < matrix1.length; i++) {

        sumMatrix.push([]);

        for (let j = 0; j < matrix1[0].length; j++) {

            sumMatrix[i].push(matrix1[i][j] + matrix2[i][j]);

        }


    }

    return sumMatrix;

}

/*console.log( sumTwoMatrixs ([
    [1, 2, 6],
    [1, 2, 6],
    [1, 2, 6]],
    [
        [3, 4, 6],
        [3, 4, 6],
        [3, 4, 6]]));*/

Array.prototype.removeRow = function(compare) {

    function isZero(arr) {

        for (let i = 0; i < arr.length; i++) {
            if ( compare(arr[i]) ) {
                return true;
            }
        }

        return false;

    }

    let changedArray = this;
    
    for (let i = 0; i < changedArray.length; i++) {

        if ( isZero(changedArray[i]) ) {
            changedArray.splice(i, 1);
            i--;
        }
    }

    return changedArray;
};


Array.prototype.removeСolumn = function(compare) {

    function isZero(arr, index) {

        for (let i = 0; i < arr.length; i++) {
            if ( compare(arr[i][index]) ) {
                return true;
            }
        }

        return false;

    }

    let changedArray = this;
    
    for (let i = 0; i < changedArray.length; i++) {

        if ( isZero(changedArray, i) ) {

            for (let j = 0; j < changedArray.length; j++) {
                changedArray[j].splice(i, 1);
            }

            i--;
        }
    }

    return changedArray;

};

//console.log(array.removeRow(a => a === 0))
//console.log(array.removeСolumn(a => a === 0))