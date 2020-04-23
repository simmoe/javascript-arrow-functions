// the map() function itertes over each item in an array and calls the function body for each value

const tallene = [2, 7, 3, 34, 54]

tallene.map( 
    tall => 
    console.log("Og tallet er: " + tall) 
)

//perhaps template literals
//console.log(`Og tallet er: ${tall}`) 


ordene = ["løver", "katter", "hunder", "mus", "elefanter", "olifanter", "oligarker", "presidenter", "president-oligarker"]

str = ""

ordene.map( ord => str += `\n der stod to ${ord} på et bord - kvittevittevit bom bom` )

//alert(str)

//very often, we use javascript to manipulate the HTML DOM 
//Let´s make a reference to an element on the webpage

const body = document.querySelector("body")

// we can use map to insert html DOM content
tallene.map( tall => 
    body.innerHTML += `<section><h1>${tall}</h1></section>`
)

//Head over to css...
tallene.map( tall => 
    body.innerHTML += `<section><h1 class='circle' style='font-size:${tall*6}px;width:${tall*10}px;height:${tall*10}px;'>${tall}</h1></section>`
)


//we might expand the numbers to a shape


// say we had a more complex structure

const pages = [
    {name: "forside", color: "orange"},
    {name: "underside 1", color: "blue"},
    {name: "underside 2", color: "forrestgreen"},
]

// we can now use map() with more effect:

// body.innerHTML = "";

pages.map( page => {
    body.innerHTML += `<section class=${page.color}><h1>${page.name}</h1></section>`
})



