# ⛅ Simple Weather Website

A minimal weather web app that fetches and displays **real-time weather data** using the **OpenWeather API**. Users can enter any city to get current weather conditions including temperature, humidity, weather description, and more.

---

## 📦 Features

* 🔎 Search for weather by city name
* 📡 Fetches live data from **OpenWeatherMap API**
* 🌡️ Displays temperature, humidity, wind speed, and weather status
* 🎨 Clean and responsive UI (works on desktop & mobile)

---

## 🛠️ Tech Stack

| Layer        | Technology                         |
| ------------ | ---------------------------------- |
| Frontend     | HTML, CSS, JS                      |
| Weather Data | OpenWeather API                    |
| Hosting      | Localhost                          |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/weather-website.git
cd weather-website
```

---

### 2. Get an OpenWeather API Key

1. Sign up at [https://openweathermap.org/](https://openweathermap.org/)
2. Go to your API keys section
3. Copy your **API key**

---

### 3. Configure Your API Key

In your `script.js` (or config file), replace the placeholder:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

---

### 4. Run the App

Just open `index.html` in your browser:

```bash
open index.html
```

Or use a local server:

```bash
# Python 3.x
python -m http.server
```

---

## 📄 Sample Output

```
City: Mumbai
Temperature: 31°C
Humidity: 78%
Weather: Light Rain
Wind Speed: 12 km/h
```

---

## ❗ Notes

* Make sure your API key is not hardcoded if deploying publicly. Use `.env` + a backend proxy or obfuscation for security.
* OpenWeather API has rate limits on free tier — avoid spamming requests.

---

## 📄 License

MIT License. Fork, modify, and use freely.

