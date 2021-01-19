let arr = [1, 5, 77, 45, 'sasa', 3, 8, 99, 10, 89];
console.log(arr)

//1
function searchArray(item, array) {
    if (array.indexOf(item) === -1) {
        console.log(1)
    } else {
        console.log(array.indexOf(item))
    }

}

searchArray(16, arr);
searchArray(22, arr);

//2

function doubleArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "number") {
            array[i] = 2 * array[i];
            console.log(array[i]);
        } else {
            continue;
        }

    }
    return array;
}

doubleArray(arr);

//3

function calcArrayaverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;
    }
    return sum / array.length;
}

//4a

function randomArray(length) {
    let array = new Array(length);
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    return array
}


function isMatchinArrays(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array1[i] == array2[j]) {
                return true;
            }
        }
    }
    return false;
}

let a = [28, 39, 54, 54, 73, 80, 90, 93, 94, 94];
let b = [14, 16, 25, 54, 60, 81, 82, 86, 88, 98];

console.log(isMatchinArrays(a, b));


//4b

function showMatchinArrays(array1, array2) {
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array1[i] == array2[j]) {
                array3.push(array1[i])
            }
        }
    }
    return array3;
}

console.log(showMatchinArrays(a, b));

