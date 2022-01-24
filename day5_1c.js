//Find the 10 most largest countries
const axios = require('axios');
const API_URL = 'https://restcountries.com/v3/all'

const getLargestCountries = async ()=>{
    const res = await axios(API_URL);
    let result = res.data
//sorting on the basis on area
    let obj = result.sort( compare );
    let array = []
// creating the array of object of country and area    
    for (let i=0;i<10;i++){
        array.push({Country : obj[i].name.common, Area : obj[0].area})
    }
    console.log("Top 10 lasgest countries in country API")
    console.log(array)
}

getLargestCountries()
//function to sort
function compare( a, b ) {
    if ( a.area < b.area){
      return 1;
    }
    if ( a.area > b.area ){
      return -1;
    }
    return 0;
  }