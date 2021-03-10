//Array Exercise

// 1
let people = ["Greg", "Mary", "Devon", "James"];
for (var i = 0; i < people.length; i++){
    console.log(people[i]);
}

//2
people.forEach(function (data) {
    console.log(data)
});

//3
people.splice(0, 1);
console.log(people);

//4
people.splice(2, 1);
console.log(people);

//5
people.splice(0, 0, "Matt");
console.log(people);

//6
people.splice(3, 0, "Godlife");
console.log(people);

//7
for(var i = 0; i < people.length; i++){
         if (people[i] == "Mary") break;
         console.log(people[i]);
}

//8
let lastPerson = people.slice(2);
console.log(lastPerson);

//9
let peopleII = ["Greg", "Mary", "Devon", "James"];

peopleII.splice(2, 1, "Elizabeth", "Artie");
console.log(peopleII);

//10
let Bob = ["Bob"];
let withBob = people.concat(Bob);

console.log(withBob);

// Object Exercise

//1 
let programming = {
    languages: ["JavaScript", "Python", "Ruby", "Go"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
console.log(programming);

//2
programming['difficulty'] = 7;
console.log(programming);


