"use strict";

const searchWeather = () => {
  const cityName = searchCity.value.trim();
  if (cityName.length == 0) return alert("Please enter a City Name");
  const http = new XMLHttpRequest();
  const apiKey = "";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}`
  const method = "GET";

  http.open(method, url);
  http.onreadystatechange = () => {
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {

    } else if (http.readyState === XMLHttpRequest.DONE) {
      alert("Something went wrong");
    }
  }
}

searchButton.addEventListener("click", searchWeather);

