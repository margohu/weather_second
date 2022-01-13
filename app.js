// LS object - for location data
const ls = new LS()
// init location data
const weatherLocation = ls.getLocationData()
// Weather object - init location
const weather = new Weather(weatherLocation)
// UI object
const ui = new UI()
// init DOM reloaded event
document.addEventListener('DOMContentLoaded', getWeather)

// change city and get weather data
const form = document.querySelector('#change-city')
form.addEventListener('submit', changeCityWeather)

function changeCityWeather(event){
    const city = document.querySelector('#city-name').value
    weather.changeCity(city)
    ls.setLocationData(city)
    getWeather()
    document.querySelector('#city-name').value = ''
    event.preventDefault()
}


// get city weather and display it
function getWeather() {
    weather.getWeather()
        .then(data => {
            ui.drawWeather(data)
        })
        .catch(error => console.log(error));
}