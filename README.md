# javascript-arrow-functions
Introduction to modern javascript arrow functions. In this repo you will find an approach to teaching arrow functions at high school A level. The tasks and demos have emphasis on visual output -ie affecting the HTML DOM, so the students can learn what functional arrays are good for. The last exercises uses more complex JSON arrays, to produce small functional webpages.  

The subjects covered are:
-arrow function syntax
-array.map()
-array.filter()
-array.find()
-array spread 
 
Arrow functions are a new approach to writing quick and eloquent Javascript. It is also necessary knowledge if you plan on handling javascript in frameworks such as Angular, React or Vue. 

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

console.log( add(12, 12) ) //24
````

...if we have to do more than one line of code inside the function, we need the curly brackets and the return statement:

```javascript
const subtractOneThenAdd = (a, b) => {
    a -= 1
    return a + b
}

console.log( subtractOneThenAdd(12, 12) ) //24
```
