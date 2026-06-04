const apiKey = 'd8f129575ed34702acb200347263005';
const baseURL = 'https://api.weatherapi.com/v1/current.json';
const forscastURL = 'https://api.weatherapi.com/v1/forecast.json';


let citySearch = [];

function init() {
    getFromLocalStorage();
    renderPage();
    renderSaveCity();
    loadWeather();
    loadForecast();
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
        addCity(data);
        renderSaveCity();

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

function renderPage() {
    document.getElementById('header').innerHTML = getHeader();
    document.getElementById('searchCity').innerHTML = getCity();
    document.getElementById('footer').innerHTML = getFooter();
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
        ${forecastHTML}
    `;
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

function addCity(data) {
    const cityData = {
        name: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c
    }
    if(!citySearch.some(city => city.name === cityData.name)){
        citySearch.push(cityData);
    }

    saveToLocalStorage();
    renderSaveCity();
}

function renderSaveCity() {
    let contentRef = document.getElementById('saveSearched');
    contentRef.innerHTML = "";
    
    for( const data of citySearch ) 
    {
        contentRef.innerHTML += getSaveContainer(data);
        updateLayout();
    }
}

function updateLayout() {
    let contentRef = document.getElementById('saveSearched');
    if(citySearch.length > 4){
        contentRef.classList.add("gridLayout");
    }
}

function loadSavedCity(data) {
    document.getElementById('cityInput').value = data;
    loadWeather();
}

function saveToLocalStorage() {
    localStorage.setItem("city", JSON.stringify(citySearch));
}

function getFromLocalStorage() {
    let getData = localStorage.getItem("city");
    if(getData){
        citySearch = JSON.parse(getData);
    }
}