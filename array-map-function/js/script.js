// the map() function itertes over each item in an array and calls the function body for each value


const tallene = [2, 7, 3, 34, 54]

tallene.map( tall => console.log("Og tallet er: " + tall) )

const body = document.querySelector("body")


// we can use map to insert html DOM content
tallene.map( tall => 
    body.innerHTML += `<section><h1>${tall}</h1></section>`
)

// say we had a more complex structure

const pages = [
    {name: "forside", color: "orange"},
    {name: "Underside 1", color: "lightgreen"},
    {name: "Underside 2", color: "lightsalmon"},
]

// we can now use map() with more effect:

body.innerHTML = "";

pages.map( page => {
    body.innerHTML += `<section class=${page.color}><h1>${page.name}</h1></section>`
})

