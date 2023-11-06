var APIKey = "b45ee8c01e0f5a210593d03069c26e1f";

var cityInput = document.querySelector(".city-input");
var searchButton = document.querySelector(".search-btn");

var getCityCoordinates = () => {
    var cityName = cityInput.value.trim();
    if(!cityName) return;
    var GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIKey}';

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
console.log(data)
    })

}
searchButton.addEventListener("click", getCityCoordinates);

api.openweathermap.org/data/2.5/weather?q={LosAngeles}&appid:{APIkey}
