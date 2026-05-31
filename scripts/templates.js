function getHeader() {
    return `
    <header class="header">
        <ul class="ulHeader">
            <li><h1>WEATHER APP</h1></li>
            <li><img class="headerLogo" src="./assets/icons/weatherLogo.svg" alt="Weather Image"></img></li>
        </ul>
    </header>
    `;
}

function getCity() {
    return `
    <div class="cityContainer">
        <input type="text" id="cityInput" value="Berlin" placeholder="Stadt eingeben">
        <button onclick="${loadWeather()}">Suche</button>
    </div>
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
                    <p>${data.current.condition.text}</p>
                </div>
            </div>
            <div class="weatherMiddleRight">
                <p>Luftfeuchtigkeit: ${data.current.humidity} %</p>
                <p>Bewölkung: ${data.current.cloud} %</p>
                <p>Wind: ${data.current.wind_kph} km/h</p>
            </div>
        </div>
    </div>
    `;
}