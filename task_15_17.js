"use strict"

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


function getSumTwoMatrixs (matrix1, matrix2) {

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

/*console.log( getSumTwoMatrixs ([
    [1, 2, 6],
    [1, 2, 6],
    [1, 2, 6]],
    [
        [3, 4, 6],
        [3, 4, 6],
        [3, 4, 6]]));*/

function removeRowWithZeroElem(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    function isRowZeroElement(arr) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                return true;
            }
        }

        return false;

    }

    let changedArray = arr;
    
    for (let i = 0; i < changedArray.length; i++) {

        if ( isRowZeroElement(changedArray[i]) ) {
            changedArray.splice(i, 1);
            i--;
        }
    }

    return changedArray;
}


/*console.log( removeRowWithZeroElem([
    [0, 1, 6],
    [1, 1, 6],
    [1, 2, 3]]));*/

function removeСolumnWithZeroElem(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    function isСolumnZeroElement(arr, index) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i][index] === 0) {
                return true;
            }
        }

        return false;

    }

    let changedArray = arr;
    
    for (let i = 0; i < changedArray.length; i++) {

        if ( isСolumnZeroElement(changedArray, i) ) {

            for (let j = 0; j < changedArray.length; j++) {
                changedArray[j].splice(i, 1);
            }

            i--;
        }
    }

    return changedArray;
}


/*console.log( removeСolumnWithZeroElem([
    [1, 0, 6, 2],
    [0, 1, 6, 2],
    [1, 2, 0, 2]]));
 */   