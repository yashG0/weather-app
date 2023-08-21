// * MY WEATHER API-KEY
const API_KEY = "8344546e58d66e43b0de9b36c0137b8b";

const API_CALL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");


async function checkWeather(city) {
    const res = await fetch(`${API_CALL}&q=${city}&appid=${API_KEY}`);
    
    let data = await res.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Cloud"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/humidity.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "images/wind.png";
    }
    return 1
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
checkWeather(city="nagpur");


