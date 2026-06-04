function getHeader() {
    return `
        <h1>WEATHER APP</h1>
        <img class="headerLogo" src="./assets/icons/weatherLogo.svg" alt="Weather Image"></img>
    `;
}

function getCity() {
    return `
        <input type="text" id="cityInput" value="Berlin" placeholder="Stadt eingeben" onclick="enterKey(), addCity()">
        <button onclick="loadWeather(), enterKey(), addCity()">Suche</button>
        <button class="deleteBtn" onclick="deleteMessage()">Suche löschen</button>
    `;
}

function getWeatherCard(data) {
    return `
    <div class="weatherCard">
        <div class="weatherHeader">
            <h3>${data.location.name}</h3>
            <h5>${data.location.country}</h5>
        </div>
        <div class="weatherMiddle">
            <div class="weatherMiddleLeft">
                <img src="https:${data.current.condition.icon}" alt="Weather Icon">
                <div class="leftText">
                    <div class="temperatur">
                        <p class="middleLeftP">${data.current.temp_c}</p>
                        <p>°C</p>
                    </div>
                </div>
            </div>
            <div class="weatherMiddleRight">
                <p>Luftfeuchtigkeit: ${data.current.humidity} %</p>
                <p>Bewölkung: ${data.current.cloud} %</p>
                <p>Wind: ${data.current.wind_kph} km/h</p>
                <p>${data.current.condition.text}</p>
            </div>
        </div>
    </div>
    `;
}

function getForecastCard(day) {
    return `
        <div class="forecast">
            <h4>${day.date}</h4>
            <div class="foreCastMiddle">
                <img src="https:${day.day.condition.icon}" alt="Forecast">
                <p class="foreCastMiddleP">${day.day.avgtemp_c}°C</p>
            </div>
            <p class="forecastText">${day.day.condition.text}</p>
        </div>
    `;
}

function getSaveContainer(data) {
    return `
    <div class="safeContainer" onclick="loadSavedCity('${data.name}')">
        <h3>${data.name}</h3>
        <h5>${data.country}</h5>
        <p>${data.temp} °C</p>
    </div>
    `;
}

function getFooter() {
    return `
    <p class="footerP">Kadir Kahraman</p>
    `;
}