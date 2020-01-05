// save characters data as a file called RickMorty.js: https://github.com/jdorfman/awesome-json-datasets#github-api 
import RickMorty from '../files/RickMorty.js'

//Paste JSON here http://json.parser.online.fr/ to get a better picture
console.log(RickMorty.results[0].name)

// now that we got data, build some html 
function showCharacters(array) {
    let html = ""
    array.map(
        character => {
            html += `<article>`
            html += `<h2>${character.name}</h2>`
            html += `<img src="${character.image}" />`
            html += `<div>
                        <ul>
                            <li>Status: ${character.status}</li>
                            <li>Gender: ${character.gender}</li>
                            <li>Species: ${character.species}</li>
                            <li>Created: ${character.created}</li>
                        </ul> 
                    </div>`
            html += `</article>`
        }
    )

    const main = document.querySelector("main")
    main.innerHTML = html
}

showCharacters(RickMorty.results)

