//according to this paper: https://paper.dropbox.com/doc/Oppgavesett-1-Tema-4--AoJkTkgaQ3mE5wDMrxiHnMjfAg-hfTwwJDBHultDk4kTJZLE


function fortellEnVits() {
    console.log("Ka sa den ene tørrfesken te den andre?");
    console.log("long time no sea"); 
  }

const fortellEnVitsA = () => {
    console.log("Ka sa den ene tørrfesken te den andre?");
    console.log("long time no sea"); 
}  

fortellEnVitsA()


function addMeToTheSong(name) {
    console.log("Ground Control to Major " + name);
}

const addMeToTheSongA = (name) => console.log("Ground Control to Major " + name)

addMeToTheSongA('Tom')

const numbers = [10, 13, 56, 54, 43, 20, 21, 6, 67, 9, 0]

const getSomeNumbers = () => numbers.filter(
    number => number <= 80 && number >= 20
)

const filtered = getSomeNumbers()

if(filtered.length == numbers.length) console.log('Oi! Alle tallene var mellom 20 og 80')

if(filtered.length < 1) console.log('Oi! Ingen tall mellom 20 og 80?')

if(filtered.length > 1 && filtered.length < numbers.length) console.log('Disse tallene var mellem 20 og 80: ', filtered)


const musikere = [
    {navn: "Annifrid", rating: 6},
    {navn: "Agnethe", rating: 3},
    {navn: "Benny", rating: 5},
    {navn: "Bjørn", rating: 2}
]

const hiRating = musikere.filter(
    musiker => musiker.navn > 4
) 

console.log( 'Disse musikere har høyere rating enn 4: ' + hiRating.map( m =>  m.navn  ) )

//Oppgave 5 Bruk Array.find() til å finne og logge ut egenskapen til skurken som heter Jesse James.

//OBS: The find() method returns the ___value___ of the first element in the provided array that satisfies the provided testing function.

const skurker = [
    {navn: "Billy the Kid", egenskap: "Rask på avtrekkeren"},
    {navn: "Jesse James", egenskap: "Iskald"},
    {navn: "Brødrene Dalton", egenskap: "Jobber godt sammen"}
]

const jesse = skurker.find(
    skurk => skurk.navn == "Jesse James"
)

console.log (`${jesse.navn}: ${jesse.egenskap}`)


//Oppgave 6

//Bruk Array.map() til å lage en liste med matrettene. Lag et liste-element (li) for hver matrett, og legg det inn i <ul>-elementet med id=”ulMatretter”.


    const ulMatretter = document.querySelector("#UlMatretter")
    
    const matretter = ["Kapteinens favoritt", "Kjøtt utklemt i panne", "Biff Stroganof"]
    
    // Her kommer din kode
    const list = matretter.map(
        ret => 
        ulMatretter.innerHTML += `<li>${ret}</li>`
    )


//    Oppgave 7

//    Sett sammen arrayene i koden til ett array:
    
   
       const words1 = ["The", "way", "you"]
       const words2 = ["make", "me", "feel"]
       
       const theTitle = [...words1, ...words2]

       console.log(theTitle)


    //    Oppgave 8
    //    Skriv én linje kode som gjør at ordtaket blir riktig:
       
       
           let sitat = ["har", "gull", "i"]
           console.log(`Morgenstunn ${sitat[0]} ${sitat[1]} ${sitat[2]} munn`)
       