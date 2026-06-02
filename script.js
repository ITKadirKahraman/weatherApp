const apiKey = '';
const baseURL = '';
const forscastURL = '';

function init() {
    renderHeader();
    renderCitySearch();
    loadWeather();
    loadForecast();
    renderFooter();
}

async function loadWeather() {
    try {
        const city = document.getElementById('cityInput').value;
        const url = `${baseURL}?key=${apiKey}&q=${city}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Fehler beim Laden der Wetterdaten");           
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);   
        }

        renderWeather(data);
        loadForecast();

    } catch (error) {
        document.getElementById('weatherContent').innerHTML = `<p>${error.message}</p>`;
    }
}

async function loadForecast() {
    try {
        const city = document.getElementById('cityInput').value;
        const url = `${forscastURL}?key=${apiKey}&q=${city}&days=3`;
        const response = await fetch(url);
        const data = await response.json();
        renderForecast(data);
    } catch (error) {
        document.getElementById('forecastContainer').innerHTML = `<p>${error.message}</p>`;
    }
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

function renderForecast(data) {
    let content = document.getElementById('forecastContainer');
    let forecastHTML = '';
    for (const day of data.forecast.forecastday) {
        forecastHTML += getForecastCard(day);
    }

    content.innerHTML = `
    <div class="forecastCard">
        ${forecastHTML}
    </div>
    `;
}

function renderFooter() {
    document.getElementById('footer').innerHTML = getFooter();
}

function enterKey() {
    let search = document.getElementById('searchCity');

    search.addEventListener('keydown', function (event) {
        if(event.key == 'Enter') {
            loadWeather();
            loadForecast();
        }
    })
}