# 🌦️ Weather App

Eine moderne Wetteranwendung mit aktueller Wetteranzeige, 3-Tage-Vorhersage und Speicherung bereits gesuchter Städte.

## 🚀 Features

- 🔍 Wettersuche nach Städten weltweit
- 🌡️ Aktuelle Wetterdaten
- 📅 3-Tage-Wettervorhersage
- 💨 Anzeige von Windgeschwindigkeit
- ☁️ Anzeige der Bewölkung
- 💧 Anzeige der Luftfeuchtigkeit
- 🖼️ Dynamische Wettericons
- 💾 Speicherung gesuchter Städte mit LocalStorage
- 🗂️ Schnellzugriff auf gespeicherte Städte
- 🗑️ Löschen aller gespeicherten Suchanfragen
- ⌨️ Unterstützung der Enter-Taste für die Suche
- ⚠️ Fehlerbehandlung bei ungültigen Eingaben oder API-Fehlern

---

## 🛠️ Verwendete Technologien

- HTML5
- CSS3
- JavaScript (ES6+)
- WeatherAPI
- LocalStorage
- Fetch API

---

## 📂 Projektstruktur

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── icons/
│   └── images/
│
└── README.md
```

---

## 🌐 API

Die Wetterdaten werden über die WeatherAPI bereitgestellt.

Benötigt wird ein eigener API-Key:

```javascript
const apiKey = "DEIN_API_KEY";
```

API-Dokumentation:

https://www.weatherapi.com/docs/

---

## 🎯 Lernziele des Projekts

Dieses Projekt wurde erstellt, um praktische Erfahrungen zu sammeln mit:

- API-Anbindungen
- Asynchronem JavaScript (async / await)
- Fehlerbehandlung mit try / catch
- DOM-Manipulation
- Dynamischer Datenanzeige
- LocalStorage
- Responsive UI-Strukturen
- Clean Code & Projektstrukturierung

---

## 💾 Gespeicherte Städte

Die Anwendung speichert bereits gesuchte Städte lokal im Browser.

Dadurch können:

- Städte erneut aufgerufen werden
- Suchanfragen dauerhaft gespeichert werden
- Daten auch nach einem Seiten-Reload erhalten bleiben

---

## 📸 Funktionen im Überblick

### Aktuelles Wetter

- Stadt
- Land
- Temperatur
- Wetterzustand
- Luftfeuchtigkeit
- Bewölkung
- Windgeschwindigkeit

### Wettervorhersage

- 3-Tage-Prognose
- Durchschnittstemperatur
- Wettericon
- Wetterbeschreibung

### Gespeicherte Städte

- Lokale Speicherung
- Direkter Schnellzugriff
- Löschfunktion

---

## ▶️ Projekt starten

1. Repository klonen

```bash
git clone <repository-url>
```

2. Projekt öffnen

```bash
cd Weather-App
```

3. API-Key eintragen

```javascript
const apiKey = "DEIN_API_KEY";
```

4. Mit Live Server starten

```bash
Right Click → Open with Live Server
```

---

## 👨‍💻 Autor

**Kadir Kahraman**