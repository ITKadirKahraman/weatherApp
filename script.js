const apiKey = 'd8f129575ed34702acb200347263005';
const baseURL = 'https://api.weatherapi.com/v1/current.json';

function init() {
    renderHeader();
    renderCitySearch();
    loadWeather();
}

async function loadWeather() {
    const city = document.getElementById('cityInput').value;
    console.log(city);
    const url = `${baseURL}?key=${apiKey}&q=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    renderWeather(data);
}

function renderHeader() {
    document.getElementById('header').innerHTML = getHeader();
}

function renderCitySearch() {
    document.getElementById('searchCity').innerHTML = getCity();
}

function renderWeather(data) {
    document.getElementById('weatherContent').innerHTML = getWeatherCard(data);
}