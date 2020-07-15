//HTML ELEMENTS
let tempH1 = document.querySelector("#temph1");
let feelsLike = document.querySelector("#feels-like");
let humidityP = document.querySelector(".humidityP");
let minMaxP = document.querySelector(".minMaxP");
let windP = document.querySelector(".windP");

const key = "0c568102cfbde69ac28a70f96f49fadc";
let weatherLocation = document.querySelector("#location");






document.querySelector("#intro-btn").addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector(".container").style.display = "block";
    document.querySelector(".welcome").style.display = "none"
})


//SUBMIT BUTTON
let submit = document.querySelector("#submit");
submit.addEventListener("click", (e)=>{
    e.preventDefault();

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation.value}&appid=${key}`).then(res => res.json()).then(data => {

    tempH1.textContent = Math.round(data.main.temp - 273.15) + "°C"
    feelsLike.textContent = `Feels like ${Math.round(data.main["feels_like"] - 273.15)}°C`

    humidityP.textContent = `${data.main.humidity}%`
    minMaxP.textContent = `${Math.round(data.main.temp_min- 273.15)}°C/${Math.round(data.main.temp_max - 273.15)}°C`
    windP.textContent = `${data.wind.speed}mph`

     console.log(data)


})
    
})

