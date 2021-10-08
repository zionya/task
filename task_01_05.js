"use strict"

function isAnogramma(firstWord, secondWord) {

    if (typeof(firstWord) !== "string" || typeof(firstWord) !== "string") {
        return [];
    }

    let firstLettersArr = firstWord.toLowerCase().split("");
    let secondLettersArr = secondWord.toLowerCase().split("");

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


function countAmountNumber(num) {

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