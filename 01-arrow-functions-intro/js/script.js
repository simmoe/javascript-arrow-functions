// Normally we write functions using the "function" declaration:

function square(nr){
    return nr * nr
}

console.log( square(4) )


//In modern javascript we have a more fancy way, the arrow function:

const squareArrow = (nr) => {
    return nr * nr
}

console.log( squareArrow(4) )

//if we have only one parameter we can write that code even more compact:

const squareArrow2 = nr => {
    return nr * nr
}

console.log( squareArrow2(4) )

//if we have just one statement inside the function we can also omit the curly braces:

const squareArrow3 = nr => nr * nr

console.log( squareArrow3(4) )


//If we have more than one parameter we need to do the paranthesis

const add = (a, b) => a + b

console.log( add(12, 12) )

// if we have to do more than one line of code inside the function, we need the curly brackets and return:

const subtractOneThenAdd = (a, b) => {
    a -= 1
    return a + b
}

console.log( subtractOneThenAdd(12, 12) )

//very often we see arrow functions inside other functions

setTimeout(
    ()=>document.querySelector('body').style.backgroundColor='orangered', 
    3000
)

//and we also see them when using various asynchronous functions
fetch('https://www.googleapis.com/books/v1/volumes?q=nygårdshaug')
.then(res => res.json())
.then(json=>console.log(json))

/* 
TASKS

Write the following as an arrow function

function antallTegn(tekst) {
    return tekst.length;
}

console.log( antallTegn("Ha det på badet") );

- - - 

skriv følgende om til en arrow funksjon

function heleNavnet(fornavn, etternavn) {
    return `${fornavn} ${etternavn}`;
}

console.log( heleNavnet("Rick", "Astley") )

- - - 

Skriv en arrow funksjon som heter info.
Den skal ta to parametere - (skurk, fiende)
Funksjonen skal for eksempel returnere teksten 
Pingvinen er fienden til Batman

console.log( info("Pingvinen", "Batman") )

- - - 

write an arrow function called returnHalf that takes a number as a parameter and returns this number divided by 2 

- - - 

write and arrow funtion, returnHalfAddSix that takes one number as parameter and returns that number divided by two plus 6 

- - - 

write an arrow function, returnHalfPlusX that takes two numbers, divides the first by two and adds the second to the result

- - - 

write an arrow function, msName that takes a single word as parameter and returns that word prefixed by "ms." - i.e ms. Alexandra

- - - 

write an arrow function, greet that takes two parameters: sex(m or f) and name (string). If sex is equal to m, return "Hello mr. " + name, else return "Hello ms. " + name


*/

console.log("tasks - answers")

const antallTegn = str => str.length

console.log( antallTegn("hello ms. robinson") )

const heleNavnet = (fornavn, etternavn) => `${fornavn} ${etternavn}`

console.log( heleNavnet("Rick", "Astley") )

const info = (skurk, helt) => `${skurk} er fienden til ${helt}`
console.log( info("Pigvinen", "Batman") )

const returnHalf = nr => nr / 2

console.log( returnHalf(5) )

const returnHalfPlusSix = nr => (nr / 2) + 6

console.log( returnHalfPlusSix(6) )

const returnHalfPlusX = (nr, x) => (nr / 2) + x

console.log( returnHalfPlusX(5, 9) )

const msName = name => "ms. " + name

console.log( msName("Alexandra") )

const greed = (sex, name) => {
    if(sex == "m"){
        return "Hello mr. " + name
    }else{
        return "Hello ms. " + name
    }
}

console.log( greed("f", "Alexandra") )


//minified condition syntax 
const greedMinified = (sex, name) => "Hello " + (sex == "f" ? "ms. " : "mr. ") + name

console.log(greedMinified("m", "Joakim"))
