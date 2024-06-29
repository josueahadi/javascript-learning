// 1. You are building a web application that fetches data from multiple APIs to display 
// information about different countries. You need to fetch the country details from one API 
// and the weather information for the capital city from another API.

// **Here are the requirements:**

// - Use the fetch API to get the country details from [https://restcountries.com/v3.1/name/{countryName}](https://restcountries.com/v3.1/name/%7BcountryName%7D).
// - Use the fetch API to get the weather details from [https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.]
// Display the results in the console as follows:

// Country: France
// Capital: Paris
// Current Temperature: 18°C


// 1. You are building a web application that fetches data from multiple APIs to display 
// information about different countries. You need to fetch the country details from one API 
// and the weather information for the capital city from another API.

// **Here are the requirements:**

// - Use the fetch API to get the country details from [https://restcountries.com/v3.1/name/{countryName}](https://restcountries.com/v3.1/name/%7BcountryName%7D).
// - Use the fetch API to get the weather details from [https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.]
// Display the results in the console as follows:

// Country: France
// Capital: Paris
// Current Temperature: 18°C


async function fetchCountryDetails(countryAPI) {
    try {
        const response1 = await fetch(countryAPI, {method: 'GET'});
        if (!response1.ok) {
            throw new Error("Failed to fetch from countries API")
        }
        const data = await response1.json();
        const country = data[0];
        const capital = country.capital.join();
        const [lat, lon] = country.capitalInfo.latlng;

        const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`, {method: 'GET'});

        if (!response1.ok & !response2.ok) {
            throw new Error("Failed to fetch from weather API")
        }
        const weatherData = await response2.json();
        const currentTemperature = weatherData.current_weather.temperature;
        const unit = weatherData.current_weather_units.temperature;
        return [capital, `${currentTemperature} ${unit}`];

    } catch (error) {
       console.log("Network error: ", error.message)
    }

}

const countryName = "Rwanda";
fetchCountryDetails(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(result => {
        console.log(`Coutry: ${countryName}`)
        console.log(`Capital: ${result[0]}`)
        console.log(`Current Temperature: ${result[1]} `)
    })
    .catch(err => console.log(err));
