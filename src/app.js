let apiKey = "c6f1a8e379608edf502b9056c45c42ed";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

console.log(apiUrl);
axios.get(apiUrl).then((response) => {
  console.log(response);
});
