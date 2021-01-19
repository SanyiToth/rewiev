let people = ["Greg", "Mary", "Devon", "James"];

//1

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
//2
people.shift();
console.log("2", people)

//3
people.pop();
console.log("3", people)

//4

people.unshift("Matt");
console.log("4", people);

//5

people.push("Sanyi");
console.log("5", people);

//6
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break
    }
}

//7
let people2 = people.slice(2)
console.log(people2)


//8
console.log(people.indexOf("Mary"))

//9
console.log(people.indexOf("Foo"))

//10

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth","Artie");
console.log(people);

//11
let withBob=["Bob"];
console.log(people.concat(withBob));





