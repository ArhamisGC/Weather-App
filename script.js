const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "021029495be4231dbfb1a1fef4bba0a7";
let imagen = document.getElementById("weather");
let weather_div = document.getElementById("weather_div")
let error = document.getElementById("error");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);
  if(response.status == 404){
    error.style.display = 'block';
    weather_div.style.display = 'none';
  }else{
    error.style.display = 'none';
    let data = await response.json();
    console.log(data);
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temperature").innerHTML = Math.round(data.main.temp)+" ºC";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%"
    document.getElementById("wind").innerHTML = data.wind.speed +"Km/h";

    switch (data.weather[0].main){
      case 'Clear':
        imagen.src  = "images/clear.png";
        break;
      case 'Clouds':
        imagen.src = "images/cloud.png";
        break;
      case 'Rain':
        imagen.src = "images/rain.png";
        break;
      case 'Snow':
        imagen.src  = "images/snowy.png";
        break;
      default:
        imagen.src = "";
    }
    weather_div.style.display = 'block';
  }
}

document.getElementById("search_btn").addEventListener("click", ()=>{
    checkWeather(document.getElementById("search_bar").value);}
)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      checkWeather(document.getElementById("search_bar").value);
    }
});

