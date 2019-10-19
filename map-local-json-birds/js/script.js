// Find some other data: https://github.com/dariusk/corpora/tree/master/data
let json = {}

// fetch using await:
async function getData() {
    const b = await fetch("./files/shakespeare.json")
    json = await b.json()
    showResult(json.phrases)
}

getData()

// now that we got data, build some html 
function showResult(arr) {
    let html = ""
    arr.map(
        phrase => {
            html += `<section class="family">`
            html += `<h2>${phrase}</h2>`
            html += `</section>`
        }
    )

    const main = document.querySelector("main")
    main.innerHTML = html
}


document.querySelector("#search").addEventListener("input", (e) => {    
    //console.log(e.target.value)
    const s = json.phrases.filter( phrase => phrase.includes( e.target.value ) )
    showResult(s)
})
