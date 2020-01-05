// save these data as a file called birds.json: https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json

import Birds from '../files/Birds.js'

console.log(Birds.description)
console.log(Birds.birds[3])

showBirds(Birds.birds)

// now that we got data, build some html 
function showBirds(array) {
    //console.log(json)
    let html = ""
    array.map(
        fam => {
            html += `<section class="family">`
            html += `<h2>${fam.family}</h2><hr/>`
            html += `<ul>`

            fam.members.map(
                (member, i) => {
                    html += `<li>${member}</li>`
                }
            )

            html += `</ul>`
            html += `</section>`
        }
    )

    const main = document.querySelector("main")
    main.innerHTML = html
}

