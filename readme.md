
# 🌦️ Weather App

A simple weather application that lets users check **current weather** and a **4-day forecast** by entering a city name. Powered by the WeatherAPI and a bit of JavaScript magic.


## 🚀 Features

* 🌍 Search weather by city name
* 🌡️ Displays current temperature (°C / °F)
* 💧 Shows humidity and wind speed
* ☁️ Current weather condition (sunny, cloudy, etc.)
* 📅 4-day forecast with average temperatures



## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript 
* [WeatherAPI](https://www.weatherapi.com/)



## 📂 How It Works

1. User enters a city name in the form.
2. On submit:

   * The app fetches **current weather data**
   * Then fetches **forecast data for the next 4 days**
3. Weather data is dynamically displayed on the page.
4. If the input is empty, the app politely asks what city you *actually* want.


## 📌 JavaScript Overview

### `weatherData(cityName)`

* Fetches current weather data
* Displays:

  * City name
  * Temperature (°C / °F)
  * Humidity
  * Wind speed
  * Weather condition

### `futureData(cityName)`

* Fetches 4-day forecast data
* Displays:

  * Day of the week
  * Average temperature per day



## ▶️ How to Run

1. Clone or download the project
2. Open `index.html` in your browser
3. Enter a city name
4. Enjoy knowing the weather before stepping outside like a responsible adult ☀️🌧️


## 🔑 API Key Note

⚠️ The API key is currently written directly in the JavaScript file.



