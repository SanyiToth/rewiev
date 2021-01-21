let str = "ABCDEFGHIJKLMNOPQRST"
let str1 = "jhsadgjhasgdasjhdgasjh"

console.log(str.length)

console.log(str.charAt(0)) //A karakter index pozícióját adja vissza a string tömben.
console.log(str.charCodeAt(0)) //A karakter kódját adja vissza. www.unicode-table.com
console.log(str.concat(str1))  //Két string összefuzése

//keresés

console.log(str.indexOf("Q", 2))
console.log(str.lastIndexOf("QRST"))
console.log(str.search(/QRST/))
console.log(str.includes("Q")) * /


//manipuláló

str.slice(start, end)
str.slice(start)
str.substring(start, end)
str.substr()

//replace
let s = "Please visit Microsoft and Microsoft"
console.log(s.replace(/Microsoft/g, "W3schools"))
console.log(s.replace(/Microsoft/, "W3schools"))

//formázó

console.log(s.toUpperCase())
console.log(s.startsWith("Ple"))
console.log(s.anchor("valami"))
console.log(s.strike())


//date


let date1 = new Date();
console.log(date1) * /
