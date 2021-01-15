//1.
function goodFunction() {
    console.log("Igen édes gazdám");
}

goodFunction();


//2.


function politeFunction(name) {
    console.log("Legyen szép napod " + name + "!")
}

politeFunction('Adam');

//3.

function calculateDogYears(dogAge) {
    let peopleAge = dogAge * 7;
    console.log("Egy " + dogAge + " éves kutya annyi idős mint egy " + peopleAge + " éves ember.");
}

calculateDogYears(5);

//5.

function calcDistanceOfTectonic(from, to) {
    return console.log("A Cocos és Nazca lemezek " + from + " és " + to + " között " + ((to - from) * 0.8).toFixed(2) + " centimétert távolodtak.");
}

calcDistanceOfTectonic(2017, 2020);

//6.

function calcNetto(amount) {
    return console.log(amount * 0.73 + " Ft")

}

calcNetto(350000);

function calcBrutto(amount) {
    return console.log(amount * 1.27 + " Ft")
}

calcBrutto(255000)

//7.

function calcBrutto(amount) {
    return amount * 1.27
}

function showBrutto(name, amount) {
    let x = [name, calcBrutto(amount)];
    console.log("Az " + name + " termék nettó ára " + amount + " Ft, de áfával együtt " + calcBrutto(amount) + " Ft-ot fizetünk érte .")
}

showBrutto('Xbox', 130000);

//8.

function calcPerimeterofCircle(r) {
    return console.log("A kör kerülete: " + (2 * Math.PI * r).toFixed(2))
}

calcPerimeterofCircle(25);

function calcAreaofCircle(r) {
    return console.log("A kör területe: " + (Math.PI * Math.pow(r, 2)).toFixed(2))
}

calcAreaofCircle(25)

//10.

function getNumber() {
    let x = Number.parseInt(window.prompt("Hány számot szeretnél összeadni?"));
    let n = null;
    for (let i = 1; i <= x; i++) {
        n = Number.parseInt(window.prompt("Add meg a következő számot!")) + n;

    }
    return n
}

window.alert("Az eredmény: " + getNumber(5));

//11.

/*function calcHowlongTime(number){
    if(1<=number && number<=1000){
        return
    }

}*/




