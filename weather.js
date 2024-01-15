const API_KEY = 'bfc6a9ad72f81587054473aa06776ab6';
const CITY = 'Bandung';

const weatherAPIUrl = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${CITY}`;

fetch(weatherAPIUrl)
  .then(response => response.json())
  .then(data => {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');
    const weatherDescriptionElement = document.getElementById('weather-description');

    locationElement.textContent = `${data.location.name}, ${data.location.country}`;
    temperatureElement.textContent = `${data.current.temperature}°C`;
    humidityElement.textContent = `${data.current.humidity}%`;
    weatherDescriptionElement.textContent = data.current.weather_descriptions[0];
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    const weatherInfoElement = document.getElementById('weather-info');
    weatherInfoElement.innerHTML = `
      <p>Failed to fetch weather data. Please try again later.</p>
    `;
  });
