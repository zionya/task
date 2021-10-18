"use strict"

function isAnogramma() {
    let memo = {};

    return function anogramma(firstWord, secondWord, index) {

        index = index || 0;
        let firstWordLower = firstWord.toLowerCase();
        let secondWordLower = secondWord.toLowerCase();
    
        if (firstWordLower.length !== secondWordLower.length) {
            return false;
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

        let result = memo[(firstWord+secondWord)];

        if (result === undefined) {

            if (++index <= firstWordLower.length) {
                result = checkLetters(firstWordLower, secondWordLower, index);
            }

            memo[(firstWord+secondWord)] = result;
        }

         return result;
    };
}

function countNumber() {
    let memo = {};

    return function count(num, index) {
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

        result = memo[num];

        if (result === undefined) {

            if (++index < numberArr.length) {
                countNumbersArr = count(num, index);
            }
            
            countNumbersArr.unshift( getCount(numberArr, --index) );
          
        } else {
            return result;
        }
        
        if (index > 0) {
            return countNumbersArr;
        }

        let countedNumbers = {};
    
        for (let i = 0; i < numberArr.length; i++) {
            countedNumbers[numberArr[i]] = countNumbersArr[i];
        }
        
        memo[num] = countedNumbers;

        return countedNumbers;
    };
}

function countUnigueWords() {
    let memo = {};

    return function countWords(str, index) {
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
        let result = memo[str];

        if (result === undefined) {

            if (index < wordsArr.length) {
                count = countWords(str, ++index);

                if ( isUnigueWord(wordsArr, --index) ) {
                     count++;
                }
            }

            memo[str] = count;
        } else {
            return result;
        }

        return count;
    };
}

function countWords() {
    let memo = {};

    return function count(str, index) {
        index = index || 0;
        let wordsArr = str.toLowerCase().split(" ");
        let result = {};

        if (memo[str] === undefined) {

            if (index < wordsArr.length) {
                result = count(str, ++index);
                --index;

                if ( result[wordsArr[index]] === undefined ) {
                    result[wordsArr[index]] = 1;
                } else {
                    result[wordsArr[index]]++;
                }
            }

            memo[str] = result;
        } else {
            return memo[str];
        }

        return result;
    };
}

function fibonacci() {
    let memo = {};

    return function getFibonacci(num) {
        num = num || 0;
        let fibonacci = [0, 1];
    
        if (num < 1) {
            return [];
        }

        if (num == 1) {
             return [0];
        }

        if (num == 2) {
            return fibonacci;
        }
        
        fibonacci = memo[num] || fibonacci;

        if (memo[num] === undefined) {

            if (num >= 3) {
                fibonacci = getFibonacci(--num);
                fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
                memo[++num] = fibonacci.concat();
            }
        } 

        return fibonacci;
    };
}

function factorial() {
    let memo = {};

    return function getFactorial(num) {

        if (num == 1) {
            return 1;
        }

        let result = memo[num];

        if (result === undefined) {
            result = getFactorial(--num);
            ++num;
            memo[num] = result;
        }

        return result * num;
    };
}

function sumArray() {

    let memo = {};

    return function sum(arr, compare, index) {

        if (arr.length === 0) {
            return null;
        }

        index = index || 0;
        let key = arr.toString() + compare.toString();
        let result = memo[key] || 0;

        if (memo[key] === undefined) {

            if (index < arr.length) {
                result = sum(arr, compare, ++index);
                --index;

                if (compare(arr[index])) {
                    result += arr[index];
                }

                memo[key] = result;
            }
        }

        return result;
    };
}

function countElem() {
    let memo = {};

    return function count(arr, compare, index) {
        
        if (arr.length === 0) {
            return null;
        }

        index = index || 0;
        let key = arr.toString() + compare.toString();
        let result = memo[key] || 0;

        if (memo[key] === undefined) {
            
            if (index < arr.length) {
                result = count(arr, compare, ++index);
                --index;      
            }
            
            if (compare(arr[index])) {
                result++;
            }

            memo[key] = result;
        }

        return result;
    };
}

function getNumberBinarySys() {
    let memo = {};

    return function binarySys(num) {
        let numberDecimal = Number(num) || 0;
        let binary = memo[num] || [];

        if (memo[num] === undefined) {

            if (numberDecimal > 1) {
                binary = binarySys( Math.floor(numberDecimal / 2));
            }
            
            binary.push(numberDecimal % 2);
            memo[num] = binary;
        }

        return binary;
    };
}

function getNumberDecimalSys() {
    let memo = {};

    return function decimalSys(num, index) {
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

        let binary = num.toString();
        let decimal = memo[num] || 0;

        if (memo[num] === undefined) {

            if (index < binary.length) {
                decimal = decimalSys(num, ++index);
                --index;
            }

            if (binary[index] > 0) {
                decimal += myPow(2, (binary.length - index - 1));
            }
        
            memo[num] = decimal;
        }

        return decimal;
    };
}

function sumDoubleArr() {
    let memo = {};

    return function sum(arr, compare, indexI, indexJ) {
        indexI = indexI || 0;
        indexJ = indexJ || 0;
        let key = arr.toString() + compare.toString();
        let result = memo[key] || 0;

        if (memo[key] === undefined) {
            
            if (indexI < arr.length) {
                
                if (indexJ < arr[indexI].length) {
                    result = sum(arr, compare, indexI, ++indexJ);
                    --indexJ;
                
                    if ( compare(arr[indexI][indexJ]) ) {
                        result += arr[indexI][indexJ];
                    }
                    
                    memo[key] = result;
                    return result;
                }
        
                indexJ = 0;
                result = sum(arr, compare, ++indexI, indexJ);
            }
        }

        return result;
    };
}

function countElemDoubleArr() {
    let memo = {};

    return function count(arr, compare, indexI, indexJ) {
        indexI = indexI || 0;
        indexJ = indexJ || 0;
        let key = arr.toString() + compare.toString();
        let counter = memo[key] || 0;
        
        if (memo[key] === undefined) {

            if (indexI < arr.length) {
                
                if (indexJ < arr[indexI].length) {
                    counter = count(arr, compare, indexI, ++indexJ);
                    --indexJ;
        
                    if ( compare(arr[indexI][indexJ]) ) {
                        counter++;
                    }

                    memo[key] = counter;
                    return counter;
                }
        
                indexJ = 0;
                counter = count(arr, compare, ++indexI, indexJ);
            }
        }

        return counter;
    };
}

function sumMinMax() {
    let memo = {};

    return function sum(min, max, compare) {
        min = min || 0;
        max = max || 0;
        let key = min.toString() + max;
        let result = memo[key] || 0;

        if (memo[key] === undefined) {

            if (min <= max) {
                result = sum (++min, max, compare);
                --min;
        
                if ( compare(min) ) {
                    result += min;
                }
            }
            
            memo[key] = result;
        }

        return result;
    };
}

function avarage() {
    let memo = {};

    return function avarageArr(arr, compare, index) {
        index = index || 0;
        let key = arr.toString() + compare.toString();
        let result = memo[key] || {"counter": 0, "sum": 0,};

        if (memo[key] === undefined) {
            
            if (index < arr.length) {
                result = avarageArr(arr, compare, ++index);
                --index;   
                
                if (compare(arr[index])) {
                    result["counter"]++;
                    result["sum"] += arr[index];;
                }
            }
                
            if (index > 0) {
                return result;
            } 
        
            if (result["counter"] === 0) {
                return 0;
            }
        
            memo[key] = result["sum"] / result["counter"];
        }

        return memo[key];
    };
}

function avarageDoubleArr() {
    let memo = {};

    return function avarage(arr, compare, index) {
        
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
        
        index = index || 0;
        let key = arr.toString() + compare.toString();
        let result = {
            "counter": 0,
            "sum": 0,
        };

        if (memo[key] === undefined) {

            if (index < arr.length) {
                result = avarage(arr, compare, ++index)
                --index;
                let sum = sumElem(compare, arr[index]);
                result["counter"] += sum["counter"];
                result["sum"] += sum["sum"];
            }
        
            if (index > 0) {
                return result;
            }
            
            if (result["counter"] === 0) {
                return 0;
            }
        
            memo[key] = result["sum"] / result["counter"];
        }

        return memo[key];
    };
}

function getTransposeMatrix() {
    let memo = {};

    return function transposeMatrix(matrix, index) {
        
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
        let key = matrix.toString();
        let result = memo[key] || [];

        if (memo[key] === undefined) {

            if (index < matrix[0].length) {
                result = transposeMatrix(matrix, ++index);
                result.push( bildRow(matrix, result, (matrix[0].length - index)) );
            }
        
            memo[key] = result;
        }

        return result;
    };
}

function sumTwoMatrixs() {
    let memo = {};

    return function sumMatrixs(matrix1, matrix2, index) {
        
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
        let key = matrix1.toString() + matrix2.toString();
        let sumMatrix = memo[key] || [];

        if (memo[key] === undefined) {
                    
            if (index < matrix1.length) {
                sumMatrix = sumMatrixs(matrix1, matrix2, ++index);
                --index;
                sumMatrix.unshift( sumRow(matrix1, matrix2, index) );
            }

            memo[key] = sumMatrix;
        }

        return sumMatrix;
    };
}

function removeRow() {
    let memo = {};

    return function remove(matrix, compare, index) {
        
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
        let key = matrix.toString() + compare.toString();
        let changedArray = memo[key] || matrix;
        
        if (memo[key] === undefined) {
            
            if (index < changedArray.length) {
                changedArray = remove(matrix, compare, ++index);
        
                if ( isZero(compare, changedArray[--index]) ) {
                    changedArray.splice(index, 1);
                }
            }
            memo[key] = changedArray;
        }

        return changedArray;
    };
}

function removeСolumn() {
    let memo = {};

    return function removeCol(matrix, compare, index) {
        
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
        let key = matrix.toString() + compare.toString();
        let changedArray = memo[key] || matrix;

        if (memo[key] === undefined) {
            
            if (index < changedArray.length) {
                changedArray = removeCol(matrix, compare, ++index);
                --index;
        
                if ( isZero(compare, changedArray, index) ) {
                    changedArray = remove(changedArray, index);
                }
            }
            memo[key] = changedArray;
        }

        return changedArray;
    };
}
