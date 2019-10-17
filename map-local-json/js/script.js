// First lets get some corpus JSON
// pick one: https://github.com/dariusk/corpora
// well no, rather pick this one first:
//https://github.com/dariusk/corpora/blob/master/data/animals/birds_antarctica.json

async function birds(){
    const b = await fetch("./files/birds.json")
    const json = await b.json()
    showBirds(json)
} 

birds()

// now that weve set up the framework, lets do some printing to the HTML DOM

const main = document.querySelector("main")

function showBirds(json){
    console.log(json)

    node = document.createElement("section")
    heading = document.createElement("h1")
    text = document.createElement("p")

    node.appendChild()

    json.birds.map(
        fam => main.appendChild(
            `
            <section class="family">
                <h2>${fam.family}</h2>
            </section>
            `
        )
    )    
}
