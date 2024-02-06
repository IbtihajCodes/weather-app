"use strict";

const apiKey = "25c648b5ec714b112fc2bd2944021a44";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  weatherIcon.src = `img/${data.weather[0].main}.png`;
  weatherIcon.alt = `${data.weather[0].main + " icon"}`;

  document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", function () {
  checkWeather(searchbox.value);
});
