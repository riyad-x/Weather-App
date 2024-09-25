const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "8e4881d8222ee9aec19e55049e8918b5";

const scearchBox=document.querySelector(".search input");
const scearchBtn=document.querySelector(".search button");
const weatherIcon =document.querySelector(".weatherIcon");
async function checkWeather(city) {
    const response = await fetch(`${apiUrl + city}&appid=${apiKey}`); // Use template literals correctly
    if (!response.ok) { // Check if the response is OK
        console.error("Error fetching weather data:", response.status);
        return; // Exit if there's an error
    }
    const data = await response.json();
    console.log(data);

    // Ensure that the correct selectors are used with the correct classes
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; // Fixed class selector
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; // Fixed accessing humidity
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src =  "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
}
scearchBtn.addEventListener("click", () => {
    checkWeather(scearchBox.value);
});

checkWeather();
