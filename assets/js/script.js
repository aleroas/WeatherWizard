// assets/js/script.js

const apiKey = "2b71c2b14ac4401c98212728241907";

// Function to fetch weather data
async function getWeatherData(city) {
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  try {
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();
    if (geoData.length === 0) {
      alert("City not found");
      return;
    }
    
    const { lat, lon } = geoData[0];
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();
    
    displayWeatherData(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Function to display weather data
function displayWeatherData(data) {
  // Implement the logic to display weather data on your HTML
  console.log(data);
}

// Event listener for form submission
document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const city = document.getElementById("city-input").value;
  getWeatherData(city);
});
