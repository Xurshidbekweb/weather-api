//globals
const api = '90cb6462d2a0c4b4dd8de2c42f301a72'
const adress = 'https://api.openweathermap.org/data/2.5/'
const searchInp = document.getElementById('search')
const cityName = document.getElementById('cityname')
const searchBtn = document.getElementById('search-button')
const temperature = document.getElementById('temperature')
const cloud = document.getElementById('cloud')
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')





//events
searchBtn.addEventListener('click', getCityWeather)





//function

function getCityWeather (e) {
    e.preventDefault()
        
    fetch(`${adress}weather?q=${searchInp.value}&units=metric&appid=${api}`) 
    .then(function (weather) {
        return weather.json()
    })
    .then(getResult)
    function getResult(data) {
        showResult(data)
    }
}

function showResult(info) {
    cityName.textContent = `${searchInp.value} '${info.sys.country}'`
    searchInp.value = ''
    temperature.textContent = `${Math.round(info.main.temp)}`
    console.log(info);
    cloud.textContent = `${info.weather[0].main}`
    wind.textContent = `${info.wind.speed}`
    humidity.textContent = `${info.main.humidity}`
}


window.addEventListener('load',function () {
    this.alert(`Ixtiyoriy shahringizni ingliz tilida yozing`)
})