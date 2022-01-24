//How many languages are there in the countries API
const axios = require('axios');
const API_URL = 'https://restcountries.com/v3/all'
const totalLanguage = async ()=>{
    const res = await axios(API_URL);
    let result = res.data
    let len = 0
    let languagesArray = [], language = []
    //creating array of object of languages country wise
    for(let [key, element] of Object.entries(result)){
        // console.log(element.languages)
        if(element.languages){
            // len = len + Object.keys(element.languages).length
            languagesArray.push(Object.keys(element.languages))
        }
        
    }
    // console.log(len)
    // for(let [key1, element1] of Object.entries(language))
// creating array of total language used
    // for(let i=0; i<language.length;i++){
    //     let keyLength = Object.keys(language[i]).length        
    //     for (let j=0;j<keyLength;j++){
    //         languagesArray.push(Object.values(language[i])[j])
    //     }
    // }
    let uniq = [...new Set(languagesArray)];
    console.log("Total Number of languages in country api " +uniq.length)
}

totalLanguage()