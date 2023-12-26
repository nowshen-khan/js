// # Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 163203161310n



// Reference (Non primitive)

// Array, Objects, Functions

const cities = ["dhaka", "gazipur", "sylet"]; // array
let myObj = { // object
    name: "nowshen",
    age: 22,
}

const myFunction = function() { //function
    console.log("Hello World");
}

console.log(typeof outsideTemp);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "CineGazette"

let anothername = myYoutubename
anothername = "cookingwithanjum"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}


let user2 = user1

user2.email = "nowshen@google.com"

console.log(user1.email)
console.log(user2.email)