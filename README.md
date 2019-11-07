# javascript-arrow-functions
 introduction to modern javascript arrow functions
 
Arrow functions are a new approach to writing quick and eloquent Javascxript. It is also necessary knowledge if you plan on handling javascript in frameworks such as Angular, React or Vue. 

The basics are as follows:

Normally we write functions using the "function" declaration:

```javascript
function square(nr){
    return nr * nr
}

console.log( square(4) ) //16

```

In modern javascript we have a more fancy way, the arrow function:

```javascript
const squareArrow = (nr) => {
    return nr * nr
}

console.log( squareArrow(4) ) //16

```

if we have only one parameter we can write that code even more compact:

```javascript
const squareArrow2 = nr => {
    return nr * nr
}

console.log( squareArrow2(4) ) //16
````

if we have just one statement inside the function we can also omit the curly braces:

```javascript
const squareArrow3 = nr => nr * nr

console.log( squareArrow3(4) ) //16

```

If we have more than one parameter we need to do the paranthesis

```javascript
const add = (a, b) => a + b

console.log( add(12, 12) )
````

...if we have to do more than one line of code inside the function, we need the curly brackets and return:

```javascript
const subtractOneThenAdd = (a, b) => {
    a -= 1
    return a + b
}

console.log( subtractOneThenAdd(12, 12) )
```
