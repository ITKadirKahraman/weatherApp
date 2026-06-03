# 🌤️ Weather App

Eine einfache Wetteranwendung, die aktuelle Wetterdaten sowie eine 3-Tage-Vorhersage für beliebige Städte anzeigt.

Das Projekt wurde mit HTML, CSS und JavaScript entwickelt und nutzt eine externe Wetter-API zur Datenabfrage.

---

## 📖 Projektbeschreibung

Die Weather App ermöglicht es, Wetterinformationen für verschiedene Städte weltweit abzurufen.

Neben den aktuellen Wetterdaten werden zusätzlich Wettervorhersagen für die kommenden drei Tage angezeigt. Die Daten werden dynamisch über eine REST-API geladen und anschließend in übersichtlichen Wetterkarten dargestellt.

---

## ✨ Features

- 🌍 Wetterdaten für beliebige Städte abrufen
- 🌡️ Aktuelle Temperatur anzeigen
- 💨 Windgeschwindigkeit anzeigen
- ☁️ Bewölkung anzeigen
- 💧 Luftfeuchtigkeit anzeigen
- 📅 3-Tage-Wettervorhersage
- 🔎 Stadtsuche per Eingabefeld
- ⌨️ Suche über die Enter-Taste
- ⚠️ Fehlerbehandlung bei ungültigen Eingaben
- 📱 Responsives Layout

---

## 🛠️ Verwendete Technologien

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### APIs

- WeatherAPI

### Tools

- Visual Studio Code
- Git
- GitHub
- Live Server

---

## 🏗️ Projektstruktur

```text
Weather-App/
│
├── assets/
│   └── icons/
│
├── scripts/
│   └── templates.js
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔄 Funktionsweise

### Aktuelles Wetter

Beim Start der Anwendung werden Wetterdaten für die Standardstadt geladen.

Die Daten werden über die Fetch API abgerufen:

```javascript
const response = await fetch(url);
const data = await response.json();
```

Anschließend werden die Wetterinformationen dynamisch in die Oberfläche gerendert.

### Wettervorhersage

Zusätzlich werden Wetterdaten für die nächsten drei Tage geladen.

```javascript
days=3
```

Für jeden Tag wird automatisch eine Forecast-Karte erstellt.

### Fehlerbehandlung

Die Anwendung verarbeitet:

- API-Fehler
- Netzwerkfehler
- Ungültige Städtenamen

Beispiel:

```javascript
if (!response.ok) {
    throw new Error("Fehler beim Laden der Wetterdaten");
}
```

---

## 📚 Lernziele

Dieses Projekt diente zur Vertiefung von:

- Arbeiten mit REST-APIs
- Asynchronem JavaScript
- Fetch API
- Fehlerbehandlung mit try/catch
- Dynamischem DOM-Rendering
- Template-Strukturen
- Responsive Design
- Projektstrukturierung

---

## 🚀 Projekt starten

Repository klonen:

```bash
git clone https://github.com/DEIN_USERNAME/weather-app.git
```

Projektordner öffnen:

```bash
cd weather-app
```

Anschließend die `index.html` im Browser öffnen oder mit Live Server starten.

---

## 🔑 API-Konfiguration

Für die Nutzung wird ein eigener API-Key benötigt.

```javascript
const apiKey = "DEIN_API_KEY";
```

Den API-Key erhältst du über:

https://www.weatherapi.com/

---

## 👨‍💻 Autor

**Kadir Kahraman**

Wirtschaftsinformatiker (B.Sc.)

Interessen:

- Frontend Development
- Backend Development
- JavaScript
- TypeScript
- Python
- KI & Automatisierung
- Softwareentwicklung
- Clean Code
- DevSecOps

---

## 📄 Lizenz

Dieses Projekt dient Lern- und Demonstrationszwecken.