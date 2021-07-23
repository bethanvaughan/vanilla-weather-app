function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    minutes = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}


function displayForecast(){
    let forecastElement = document.querySelector("#forecast");

let forecastHTML = `<div class="row"> `;
let days = ["Thu", "Fri", "Sat", "Sun"];
days.forEach(function(day) {
forecastHTML = forecastHTML + `
    
<div class="col-2"> 
<div class="weather-forecast-date"> 
${day}
</div>
<img src="http://openweathermap.org/img/wn/01n@2x.png" width="36"/>

<div class="forecast-temperature"> 
  12, 18
</div>
 </div> 
</div>  
    `;
})


    
    forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
console.log(forecastHTML);
}

function displayTemperature(response) {
  let temmperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  temmperatureElement.innerHTML = Math.round(celsiusTemperature);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "c6f1a8e379608edf502b9056c45c42ed";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temmperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("lin");
  fahrenheitLink.classList.add("lin");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temmperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("lin");
  fahrenheitLink.classList.remove("lin");
  let temmperatureElement = document.querySelector("#temperature");
  temmperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);
search("London");
displayForecast();

