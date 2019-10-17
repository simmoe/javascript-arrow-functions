// Say, we have an array:

const tallene = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 12, 32, 43, 12, 54, 6];

//We can get numbers > 10 using the filter function: (ordinary function syntax)

const storeTall = tallene.filter( 
        function(tal){
            return tal > 10
        }
    )

console.log(storeTall)

// but we are also able to filter the numbers using an arrow function (prettyer):

const storeTallArrow = tallene.filter( tal => tal > 10 ) 

console.log(storeTallArrow)

// we could easily apply other filters, say even numbers:

const even = tallene.filter( tal => tal % 2 === 0 )

console.log( even )

/* TASKS

find numbers dividable by five in this array:

const andretall = [35, 5, 24, 12, 25, 50];

const fives = (...your code)

console.log (fives)

*/

const andretall = [35, 5, 24, 12, 25, 50]

const fives = andretall.filter( tal => tal % 5 === 0)

console.log( fives )

// Filter as text search - say we have a more complex object:

const varer = [
    {navn: "Smør", kategori: "meieri"},  
    {navn: "Melk", kategori: "meieri"},  
    {navn: "Fløte", kategori: "meieri"},
    {navn: "Leppestift", kategori: "kosmetikk"},
    {navn: "Eyeliner", kategori: "kosmetikk"}
  ];

  //And we want to find all produkts with category "meieri":

  const meieriprodukter = varer.filter( vare => vare.kategori === "meieri" )

  console.log( meieriprodukter )

  // Array.find() is another way to search in an array:

const filmer = [
    {tittel: "Love Story", arr: "1980" },
    {tittel: "Ben Hur", arr: "1930" },
    {tittel: "Star Wars", arr: "1945" },
    {tittel: "The Omen", arr: "1978" },
    {tittel: "Ben Hur", arr: "2020" }
];

const film = filmer.find( filmen => filmen.tittel === "Love Story" )

console.log( "Find matches the first occurence: ", film )

// Whereas filter returns an array:

const alleFilm = filmer.filter( filmen => filmen.tittel === "Ben Hur" )

console.log( "Filter returns an array: ", alleFilm )
 

// Spread operator 

let tredieTall = [2, 4, 6]

const nytArray = [0, ...tredieTall, 8]

console.log(nytArray)

// or to concatenate full arrays...

const arr1 = ["A", "B", "C"]
const arr2 = ["D", "E", "F"]

console.log( [...arr1, ...arr2])



