let user = {
    name: "Joh Doe", "John Smith",
    age: 50, 20
}

console.log(user);
console.log(user.name);
// console.log(user.['name']);
let key = "name";
console.log(user[key]);


let a = [1, 2];      //Összetett tipusu változoknál, ha változtatjuk a referencia változó értékeit akkor az új változó értékei is változni fognak.
// Stack és Heap mőködésén alapul. Csak egy pointert hoz létre a stackben.Az objectek megtartjak a referenciájukat.
let b = a;
a[0] = "Hello";
console.log(a, b);

user.hasOwnProperty("name");

Object.values(user);
Object.keys(user);
