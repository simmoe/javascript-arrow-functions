// Normally we write functions using the "function" declaration:


function square(nr){
    return nr * nr
}

console.log( square(4) )


//In modern javascript we have a more fancy and quick way, the arrow function:

const squareArrow = (nr) => {
    return nr * nr
}

console.log( squareArrow(2) )

//if we have only one parameter we can write that code even more compact:

const squareMinified = nr => nr * nr

console.log( squareMinified(6) )

//If we have more than one parameter we need to do the paranthesis

const add = (a, b) => a + b

console.log( add(12, 12) )

// if we have to do more than one line of code inside the function, we need the curly brackets and return:

const subtractOneThenAdd = (a, b) => {
    a -= 1
    return a + b
}

console.log( subtractOneThenAdd(12, 12) )

/* 
TASKS

write an arrow function called returnHalf that takes a number as a parameter and returns this number divided by 2 

write and arrow funtion, returnHalfAddSix that takes one number as parameter and returns that number divided by two plus 6 

write an arraow function, returnHalfPlusX that takes two numbers, divides the first by two and adds the second to the result

write an arrow function, msName that takes a single word as parameter and returns that word prefixed by "ms." - i.e ms. Alexandra

write an arrow function, greet that takes two parameters: sex(m or f) and name (string). If sex is equal to m, return "Hello mr. " + name, else return "Hello ms. " + name

*/

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
