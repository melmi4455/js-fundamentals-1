// Good Luck! You got this 💪🏾
// Write your code here.






// javascript Fundamentals

let Country= "Somaliland"
let Continent= "Africa"
let population= 5
console.log (Country)
console.log (Continent)
console.log(population)

let Language = "Somali"

let onCoast = true


let Half = population/2


console.log(Half)

let Population2= population + 1
console.log(Population2)

FinlandPopulation= 6

console.log(population>FinlandPopulation)

AveragePopulation= 33

console.log(population<AveragePopulation)


Description= (`${Country} is in ${Continent} and its ${population} million people speak ${Language}` )
console.log(Description)


if(population>AveragePopulation) {
    console.log("Your countrys population is above average")
}
    else{
        console.log("Your countrys population is below average")
    }
        


if (population<50 && onCoast===true) {
    console.log(`You should live in ${Country}`)
}
else {
    console.log(`${Country} does not fit into your criteria`)
}

let givenLanguage= "chinese"

if(givenLanguage=== "chinese" || givenLanguage=== "mangarin") {
    console.log("most number of native speakers")
}
else if (givenLanguage==="spanish") {
    console.log("2nd place in number of native speakers")
}
else if (givenLanguage==="english") { 
    console.log("3rd place")
}
else if (givenLanguage==="hindi") {
    console.log("Number 4")
}
else if (givenLanguage==="arabic"){
    console.log("5th most spoken language")

}
else {
 console.log ("great languages too")
}

population>AveragePopulation ? console.log("your country is above average") : console.log("your country is below average")