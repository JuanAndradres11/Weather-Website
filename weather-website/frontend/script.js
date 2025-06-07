let weather = {
    "apikey": "your_api_key", // You can remove this if backend handles the key
    fetchWeather: function(city) {
        fetch(`https://your-api-gateway-url/weather?city=${city}`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch(error => console.error('Error fetching weather:', error));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    search: function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("durgapur");
