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

//console.log(isAnogramma("asdsG", "gdass"));


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

//console.log(countNumber(123559990));

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

    if (typeof(num) !== 'number') {
        return [];
    }

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

function Rectangle(width, height) {
    this.width = width || 0;
    this.height = height || 0;
}

Rectangle.prototype.perimeter = function() {
    return 2 * (this.height + this.width);
};
Rectangle.prototype.square = function() {
    return this.height * this.width;
};

//let rect = new Rectangle(5, 10);
//console.log(rect.perimeter());
//console.log(rect.square());

function Triangle(side1, side2, side3) {
    this.side1 = side1 || 0;
    this.side2 = side2 || 0;
    this.side3 = side3 || 0;
}

Triangle.prototype.perimeter = function() {
    return this.side1 + this.side2 + this.side3;
};

Triangle.prototype.square = function() {
    
    let semiPerimeter = (this.side1 + this.side2 + this.side3) / 2;
    
    return Math.sqrt(semiPerimeter * (semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3));
};

//let triangle = new Triangle(4, 5, 6);
//console.log(triangle.perimeter());
//console.log(triangle.square());

function Circle(radius) {
    this.radius = radius || 0;
}

Circle.prototype.length = function() {
    return 2 * Math.PI * this.radius;
};

Circle.prototype.square = function() {
    return Math.PI * this.radius * this.radius;
};

//let circle = new Circle (5);
//console.log(circle.length());
//console.log(circle.square()); 

function getFactorial(num) {
    
    if (typeof(num) !== 'number') {
        return [];
    }

    let factorial = 1;

    for (let i = 0; i < num; i++) {

        factorial = factorial * (i + 1);

    }

    return factorial;

}

//console.log(getFactorial(5));

Array.prototype.sum = function(compare) {

    let sum = 0;

    for (let i = 0; i < this.length; i++) {

        if ( compare(this[i]) ) {
            sum += this[i];
        }
    }

    return sum;
};

Array.prototype.countElem = function(compare) {
    
    let counter = 0;

    for (let i = 0; i < this.length; i++) {

        if( compare(this[i]) ) {
            counter++;
        } 

    }

    return counter;

};

//let arr = [2, 11, 0, 7, 8, 9, 10, 12, 20, 21];

//console.log(arr.sum(a => a % 2 === 0));
//console.log(arr.sum(a => a % 3 === 0));
//console.log(arr.sum(a => a > 0));
//console.log(arr.sum(a => Math.abs(a % 2) > 0));

//console.log(arr.countElem(a => a === 0));
//console.log(arr.countElem(a => a < 0));
//console.log(arr.countElem(a => a > 0));
/*console.log(arr.countElem(a => {
    
    let counter = 0;

    if (a < 2) {
        return false;
    }

    for (let i = 1; i < a; i++) {

        if (a % i === 0) {
            counter++;
        }

    }

    if (counter > 1) {
        return false;
    } 

    return true;

}));*/

function getNumberBinarySys(num) {

    let numberDecimal = Number(num) || 0;
    let binary = [];

    while (numberDecimal > 0) {

        binary.unshift(numberDecimal % 2);
        numberDecimal = Math.floor(numberDecimal / 2);

    }

    return Number(binary.join(""));
}

//console.log(getNumberBinarySys(15));

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

Array.prototype.sumDoubleArr = function(compare) {

    let sum = 0;

    for (let i = 0; i < this.length; i++) {

        for (let j = 0; j < this[i].length; j++) {

            if ( compare(this[i][j]) ) {
                sum += arr[i][j];
            }

        }

    }

    return sum;

};

Array.prototype.countElemDoubleArr = function(compare) {

    let counter = 0;

    for (let i = 0; i < this.length; i++) {

        for (let j = 0; j < this[i].length; j++) {

            if ( compare(this[i][j]) ) {
                counter++;
            }

        } 

    }

    return counter;

}


//let arr = [[-2, 4], [-6, 7], [8, -9], [10, 12], [20, 21]];

//console.log(arr.sumDoubleArr(a => a % 2 === 0))
//console.log(arr.sumDoubleArr(a => a % 3 === 0))
//console.log(arr.sumDoubleArr(a => a > 0))
//console.log(arr.sumDoubleArr(a => Math.abs(a % 2) > 0))

//let arr = [[2, 4], [0, -7], [8, 0], [-10, 0], [20, 21]];

//console.log(arr.countElemDoubleArr(a => a === 0));
//console.log(arr.countElemDoubleArr(a => a < 0));
//console.log(arr.countElemDoubleArr(a => a > 0));

function sumMinMax(min, max, compare) {

    min = min || 0;
    max = max || 0;
    
    let sum = 0;

    for (let i = min; i <= max; i++) {

        if( compare(i) ) {
            sum += i;
        }

    }
    return sum;
}

//console.log(sumMinMax(1, 5, a => true));
//console.log(sumMinMax(1, 9, a => a % 3 === 0));
//console.log(sumMinMax(-5, 5, a => a > 0));

//let arr = [1, 2, 3, 4, 5, 6, 7];
let arr = [[1, 2], [3, 4], [5, 6], [7, 5]];

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