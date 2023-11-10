
var cityInput = document.querySelector(".city-input");
var searchButton = document.querySelector(".search-btn");
var APIKey = "1aa712fbf2facb512dc7d42d65305cce";
              
var getCityCoordinates = () => {
    var cityName = cityInput.value.trim();
    if(!cityName) return;
    var location = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;

    fetch(location).then(res => res.json()).then(data => {
console.log(data)
    }).catch(() => {
alert("An error occured while fetching the coordinates!");
    })

}
searchButton.addEventListener("click", getCityCoordinates);


 