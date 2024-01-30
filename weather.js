const fetchWeatherData = async () => {
  try {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&key=SS675J8DM5NNF89URDPMSVNAW&contentType=json");
    const data = await response.json();

    // Extract relevant data from the API response
    const latestWeatherData = data.days[data.days.length - 1];
    
    // Update HTML elements with weather data
    document.getElementById('location').textContent = data.resolvedAddress;
    document.getElementById('temperature').textContent = `${latestWeatherData.temp}°C`;
    document.getElementById('humidity').textContent = `${latestWeatherData.humidity}%`;
    document.getElementById('weather-description').textContent = latestWeatherData.description;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

// Initial fetch
fetchWeatherData();

// Update weather data every 1 hour (3600000 milliseconds)
setInterval(fetchWeatherData, 3600000);