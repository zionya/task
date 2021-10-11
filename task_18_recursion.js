"use strict"

function isAnogramma(firstWord, secondWord) {

    if (typeof(firstWord) !== "string" || typeof(firstWord) !== "string") {
        return [];
    }

    let firstLettersArr = firstWord.toLowerCase();
    let secondLettersArr = secondWord.toLowerCase();

    if (firstLettersArr.length !== secondLettersArr.length) {
        
        return false;

    }

    for (let i = 0; i < firstLettersArr.length; i++) {

        let countI = 0;
        let countJ = 0;

        for (let j = 0; j < firstLettersArr.length; j++) {

            if (firstLettersArr[i] === firstLettersArr[j]) {
                countI++;
            }

            if (firstLettersArr[i] === secondLettersArr[j]) {
                countJ++;
            }

        }

        if (countI !== countJ) {
            
            return false;

        } 

    }

    return true;

}

//console.log(isAnogramma("ashsG", "gdass"));


function countNumber(num) {

    //let numberArr = num.toString().split("");
    let numberArr = getSeparateNumber(num);
    let countNumbersArr = [];
    
    function getSeparateNumber(num) {

        let result = [];
        let numberSeparate = num;

        while (numberSeparate > 0) {

            result.unshift(numberSeparate % 10);
            numberSeparate = Math.floor (numberSeparate / 10);

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

//console.log(countAmountNumber(123559990));

function countUnigueWords(str) {

    if (typeof(str) !== "string"){
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


    if (typeof(str) !== "string"){
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

        if(pow == 0){
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


//console.log(sumMinMax(1, 9, a => a % 3 === 0));
//console.log(sumMinMax(-5, 5, a => a > 0));

//let arr = [1, 2, 3, 4, 5, 6, 7];
//let arr = [[1, 2], [3, 4], [5, 6], [7, 5]];

Array.prototype.avarage = function(compare) {

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < this.length; i++) {

        if( compare(this[i]) ) {
            counter++;
            sum += this[i];
        }

    }

    if (counter === 0) {

        return 0;

    }

    return sum / counter;

};

Array.prototype.avarageDoubleArr = function(compare) {

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
        
        for (let j = 0; j < this[i].length; j++){
            
            if( compare(this[i][j]) ) {
                counter++;
                sum += this[i][j];
            }    
        }

    }

    if (counter === 0) {

        return 0;

    }

    return sum / counter;

};

//console.log(arr.avarage(a => true));
//console.log(arr.avarage(a => a % 2 === 0));
//console.log(arr.avarage(a => Math.abs(a % 2) > 0));


//console.log(arr.avarageDoubleArr(a => true));
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