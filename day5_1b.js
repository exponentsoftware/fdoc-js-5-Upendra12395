// Find the 15 most spoken languages
const axios = require('axios');
const API_URL = 'https://restcountries.com/v3/all'
const getMostlyUsedLanguages = async ()=>{
    const res = await axios(API_URL);
    let result = res.data
    let language = [], languagesArray = []
    // creating array of object of languages country wise
    for(let [key, element] of Object.entries(result)){
        // console.log(element.languages)
        if(element.languages){
            language.push(element.languages)
        }
        
    }
//creating array of total language used
    for(let i=0; i<language.length;i++){
        let keyLength = Object.keys(language[i]).length        
        for (let j=0;j<keyLength;j++){
            languagesArray.push(Object.values(language[i])[j])
        }
    }
// Creating object with the combination of total language and no country where Languages used   
const occurrences = languagesArray.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});
//Creating array of object of combination of language and no country where Languages used
let temp = []
for(let i=0; i<Object.keys(occurrences).length;i++){
    temp.push({language:Object.keys(occurrences)[i], countries:Object.values(occurrences)[i]})
}
//console.log(array)
//sorting array of object on the basis of languages used
let obj = temp.sort( compare );
//console.log(obj)
// Storing top 15 languages
let mostlyUsed15Languages = []
for(let i=0; i<15; i++){
    mostlyUsed15Languages.push(obj[i])
}
console.log("Mostly used top 15 languages in country API")
console.log(mostlyUsed15Languages)
}


getMostlyUsedLanguages()

//function to sort on the basis of no of countries where language used
function compare( a, b ) {
    if ( a.countries < b.countries){
      return 1;
    }
    if ( a.countries > b.countries ){
      return -1;
    }
    return 0;
  }