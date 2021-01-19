/*let fruits = ["Banana", "Orange", "Apple", "Mango"];
let myboys = ["Emil", "Tobias", "Lunas"];


console.log(fruits.toString())
console.log(fruits.join())
console.log(fruits.pop())
console.log(fruits.shift())
delete fruits[index];
fruits.splice(2, 0, "kiwi", "strawberry");  //A 2.es indextol torol 2 elemet. es feltolti a megadott 2 elemmel
fruits.concat(myboys, [1, 2, 3], ["aas"]);   //2 tomb osszefuzese
fruits.slice(1, 2);   //A megadott parameterek kozotti tomb elemeket adja vissza.


function eldontes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            return true;
        }
    }
    return false;

}


function kivalasztas(arr, keresendo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === keresendo) {
            return i;
        }
    }
    return -1;
}


console.log(kivalasztas([1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 0], 4));


function megszamlalas(arr, tul) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tul) {
            count++;
        }
    }
    return count;
}*/

// console.log(megszamlalas([1, 2, 3, 4, 5, 6, 7, 4, 9, 2, 0], 4))


function maxKivalasztasValue(arr) {
    let maxValue = 0;
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    return maxValue;
}

function maxKivalasztasIndex(arr) {
    let maxValue = 0;
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}


function rendezes(array) {
    let change = 0;
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (array[i] < array[j]) {
                change = array[i];
                array[i] = array[j];
                array[j] = change;
            }
        }
    }
    return array
}

function randomArray(length) {
    let array = new Array(length);
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    return array
}


console.log(rendezes(randomArray(10)));


