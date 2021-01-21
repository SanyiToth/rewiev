//1
let obj = {alma: 1, körte: 2, saláta: 3, paradicsom: 4};


function objProperty(object) {
    return Object.keys(object);
}

console.log(objProperty(obj));

//2
function objValueofProperty(object) {
    return Object.values(object);
}

console.log(objValueofProperty(obj));

//3

function lengthOfobject(object) {
    return Object.keys(object).length
}

console.log(lengthOfobject(obj));

//4

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

function valueofReadingstatus(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].readingStatus);
    }
}

valueofReadingstatus(library)


//5

let input = {
    alma: "gyümölcs",
    répa: "zöldség"
}

function objectToarray(object) {
    return console.log(Object.entries(object))

}

objectToarray(input)


//6

function isContainthatString(object, string) {
    for (let i = 0; i < Object.keys(object).length; i++) {
        if (Object.keys(object)[i] == string) {
            return console.log(true)
        }
    }
    return console.log(false)
}

isContainthatString(obj, "körte")

console.log(obj.hasOwnProperty("körte"))

//7

function isContainthatPrimitive(object, primitive) {
    for (let i = 0; i < Object.keys(object).length; i++) {
        if (Object.keys(object)[i] == primitive || Object.values(object)[i] == primitive) {
            return console.log(true)
        }
    }
    return console.log(false)
}

isContainthatPrimitive(obj, "alma");
isContainthatPrimitive(obj, 2);
isContainthatPrimitive(obj, "ruhacsipesz");
isContainthatPrimitive(obj, 12)

//8

function deleteByProperty(object, prop) {
    for (let i = 0; i < Object.keys(object).length; i++) {
        if (Object.keys(object)[i] === prop) {
            delete object[prop]
        }
    }
    return console.log(object)
}

deleteByProperty(obj, "alma")

//9

function isEmpty(object) {
    if (Object.keys(object).length === 0) {
        return console.log(true)
    }
    return console.log(false)
}


isEmpty(obj)


//10

let
one = {alma: 1, körte: 2, saláta: 3, paradicsom: 4};
let two = {alma: 1, körte: 2, saláta: 3, paradicsom: 4};


function isSame(object1, object2) {
    if (JSON.stringify(object1) === JSON.stringify(object2)) {
        return console.log(true)
    }
}


isSame(one, two)
// console.log(JSON.stringify(obj) === JSON.stringify(obj2));

//11

let a = [1, 2, 4];
let b = {a: 1}
let d = new Date();

console.log(typeof a);
console.log(Object.prototype.toString.call(d))
console.log(Array.isArray(b))


function isItAnObject(object) {
    if (Object.prototype.toString.call(object) === '[object Object]') {
        return console.log(true)
    }
    return console.log(false)
}

isItAnObject(a)
