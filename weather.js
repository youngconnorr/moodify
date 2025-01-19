// const OPENWEATHER_API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;


// async function findWeather(lat, lon) {
//   // const lat = location.lat
//   // const lon = location.lon

  
//   const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`

//   fetch(weatherAPIUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     const weather = data.weather[0].description
//     return weather
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }

// export default findWeather;

import { EXPO_PUBLIC_OPENWEATHER_API_KEY } from '@env'

const OPENWEATHER_API_KEY = EXPO_PUBLIC_OPENWEATHER_API_KEY


async function findWeather(lat, lon) {
  try {
    console.log("called")
    const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`;

    const response = await fetch(weatherAPIUrl);
    if (!response.ok) {
      
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    const weather = data.weather[0].description;

    console.log("weather")

    
    return weather;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error so the calling function knows something went wrong
  }
}

export default findWeather;