"use strict"

function isAnogramma (firstStr, secondStr) {

    let firstLettersArr = firstStr.toLowerCase().split("");

    let secondLettersArr = secondStr.toLowerCase().split("");

    if(firstLettersArr.length != secondLettersArr.length) return false;

    for (let i = 0; i < firstLettersArr.length; i++){

        let countI = 0;

        let countJ = 0;

        for(let j = 0; j < firstLettersArr.length; j++){

            if(firstLettersArr[i] == firstLettersArr[j]) countI++;

            if(firstLettersArr[i] == secondLettersArr[j]) countJ++;

        }

        if (countI != countJ) return false; 

    }

    return true;

}

console.log(isAnogramma("asdaG", "gdass"));




function thinkNumber (num){

    let numberArr = num.toString().split("");
    let countNumbersArr = [];

    for (let i = 0; i < numberArr.length; i ++){
        let count = 0;
        for(let j = 0; j < numberArr.length; j++){
            if(numberArr[i] == numberArr[j]){
                count++;
            }
        }
        countNumbersArr.push(count);
    }
    console.log(numberArr);
    console.log(countNumbersArr);
    
}

function thinkUnigueWords(str){

    let wordsArr = str.toLowerCase().split(" ");
    let uniqueWords = 0;
    for(let i = 0; i < wordsArr.length; i ++){
        
        for(let j = 0; j < wordsArr.length; j++){
            if (wordsArr[i] == wordsArr[j]){

                if (i != j){
                    break;
                }

            }
            if(j == (wordsArr.length - 1)){
                uniqueWords++;
            }
        }
    }

    return uniqueWords;
}

function thinkWords(str) {

    let wordsArr = str.toLowerCase().split(" ");
    let uniqueWords = [];
    let countUniqueWords = [];

    for(let i = 0; i < wordsArr.length; i++){
        
        if (i == 0) {
            uniqueWords.push(wordsArr[i]);
        }else{

            for(let j = 0; j < uniqueWords.length; j++){
                if(wordsArr[i] == uniqueWords[j]){
                    break;
                }

                if (j == (uniqueWords.length - 1 )){
                    uniqueWords.push(wordsArr[i]);
                }
            
            }    

        }

    }
    for (let i = 0; i < uniqueWords.length; i++){
        let count = 0;
        for(let j = 0; j < wordsArr.length; j++){
            if(uniqueWords[i] == wordsArr[j]){
                count++;
            }
        }
        countUniqueWords.push(count);
    }
    console.log(uniqueWords);
    console.log(countUniqueWords);
}


function getFibonacciNumber (num){

    fibonacci = 0;
    //for ()
    return fibonacci;

}
//console.log (getFibonacciNumber(5))
//thinkWords("dffd ddd ghgh dfdsf ddds fddgf ddd ddds")
//console.log(thinkUnigueWords("dffd ddd ghgh dfdsf ddds fddgf ddd ddds"));
//thinkNumber(123885);
//console.log(thinkNumber(12345));