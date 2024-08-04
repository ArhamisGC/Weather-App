const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "021029495be4231dbfb1a1fef4bba0a7";

async function checkWeather(city){
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);

  let data = await response.json();
  console.log(data);
  document.getElementById("city").innerHTML = data.name;
  document.getElementById("temperature").innerHTML = Math.round(data.main.temp)+" ºC";
  document.getElementById("humidity").innerHTML = data.main.humidity + "%"
  document.getElementById("wind").innerHTML = data.wind.speed +"Km/h";

}
document.getElementById("search_btn").addEventListener("click", ()=>{
    checkWeather(document.getElementById("search_bar").value);}
)
