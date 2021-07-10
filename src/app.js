function displayTemperature(response) {
  console.log(response.data);
  let temmperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  temmperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "c6f1a8e379608edf502b9056c45c42ed";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cambridge&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then((response) => {
  console.log(response);
});

axios.get(apiUrl).then(displayTemperature);
