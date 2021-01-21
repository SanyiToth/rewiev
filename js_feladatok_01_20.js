//1

function toUppercaseFirst(string) {
    let firstChar = string.slice(0, 1).toUpperCase();
    let endofstring = string.slice(1)
    return console.log(firstChar + endofstring)
}

let s = "please visit Microsoft and Microsoft"
toUppercaseFirst(s)

//2


function spamCheck(text, bannedWord) {
    for (let i = 0; i < bannedWord.length; i++) {
        if (text.includes(bannedWord[i])) {
            return true
        }
    }
    return false
}

let sentence = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum distinctio dolorem, dolorum eligendi hic iste itaque iure laudantium, magnam porro provident reiciendis repudiandae rerum sed sit sunt totam unde?"
console.log(spamCheck(sentence, ["elit", "et"]))

//4
function swapTheCase(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            result = result + string[i].toLowerCase()
        } else {
            result = result + string[i].toUpperCase()
        }
    }
    return result
}


let proba = "LoReM"
console.log(swapTheCase(proba))

//6,7

let proba2 = "lalAlalA"

function calcLowerCase(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(calcLowerCase(proba2, 'a'));

//8
function calcLowandUppCase(string, letter) {
    let result = [2];
    let lowerCase = calcLowerCase(string, letter);
    let upperCase = 0;
    for (let i = 0; i < string.length; i++) {
        if (letter.toUpperCase() === string[i]) {
            upperCase++;
        }
    }
    result[0] = lowerCase;
    result[1] = upperCase;
    return result
}

let proba3 = "lalAlalA"
console.log(calcLowandUppCase(proba3, 'a'))

//9
let proba4 = "Please visit Microsoft and Microsoft"

function getWithoutSpace(string) {
    return string.replace(/ /g, "")
}

getWithoutSpace(proba4)

//10

function isItPalindrom(string) {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] == '.') {
            string = string.slice(0, string.length - 1)
            continue
        } else {
            result = result + string[i];
        }
    }
    return getWithoutSpace(result.toLowerCase()) === getWithoutSpace(string.toLowerCase())
}

let palindrom = "Indul a görög aludni."
let notPalindrom = "A magyar is megy utána."

console.log(isItPalindrom(palindrom))
console.log(isItPalindrom(notPalindrom))

//11

function isNumberinString(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
            return true
        }
    }
    return false
}

let withNumber = "sasa2"
let withoutNumber = "sasa"
console.log(isNumberinString(withNumber))
console.log(isNumberinString(withoutNumber))


//12
let input = "Bú678234s düle2dékei4de5n, Huszt42nak3 rom5476vára1 megáll56756ék."

function getStringWithoutNumber(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (isNumberinString(string[i])) {
            continue
        } else {
            result = result + string[i]
        }
    }
    return result
}

console.log(getStringWithoutNumber(input))

//13

function advencedCalc(num1, num2) {
    let operator = window.prompt("Add meg milyen müveletet végezzünk el a két számon (+,-,/,*)? ");
    if (operator == "+") {
        return num1 + num2
    } else if (operator == "-") {
        return num1 - num2
    } else if (operator == "/") {
        return num1 / num2
    } else if (operator == "*") {
        return num1 * num2
    } else {
        return -1;
    }
}

console.log(advencedCalc(6, 8))

//14

function theseAreAnagrams(word1, word2) {
    if (word1.length == word2.length) {
        for (let i = 0; i < word1.length; i++) {
            if (word2.search(word1[i]) == -1 || word1.search(word2[i]) == -1) {
                return false
            }
        }
    } else {
        return false
    }
    return true
}

let str1 = "étel"
let str2 = "élet"
let str3 = "télen"

console.log(theseAreAnagrams(str1, str2))
console.log(theseAreAnagrams(str1, str3))

//15

function checkBracets(input) {
    if (calcLowerCase(input, "(") == calcLowerCase(input, ")")) {
        return true
    }
    return false
}

let string1 = "(()())"
let string2 = "(())("
let string3 = "()()"

console.log(checkBracets(string3))