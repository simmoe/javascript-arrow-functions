// Take these or find some other data: https://github.com/dariusk/corpora/tree/master/data

import Shakespeare from '../files/Shakespeare.js'

console.log(Shakespeare.description)
console.log(Shakespeare.phrases[30])

showResult(Shakespeare.phrases)

//showResult(["mine", "sko", "er", "gamle"])

// now that we got data, build some html 
function showResult(array) {
    let html = ""
    array.map(
        phrase => {
            html += `<section>`
            html += `<h2>${phrase}</h2>`
            html += `</section>`
        }
    )

    const main = document.querySelector("main")
    main.innerHTML = html
}

// The filter() method creates an array filled with all array elements that pass a test (provided as a function). Note: filter() does not execute the function for array elements without values. Note: filter() does not change the original array.

document.querySelector("#search").addEventListener("input", (e) => {    
    //console.log(e.target.value)
    const s = Shakespeare.phrases.filter( phrase => phrase.includes( e.target.value ) )
    showResult(s)
})
