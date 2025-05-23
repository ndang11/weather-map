// document.getElementById("get-weather").addEventListener("click", () => {
//     const city = document.getElementById("city").value;
//     const apiKey = "f91684de29881f146bf80ee06da41ba3"; // Replace with your OpenWeatherMap API key
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("City not found");
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Display weather data
//         document.getElementById("temprature").textContent = `Temperature: ${data.main.temp}°C`;
//         document.getElementById("weather-info").textContent = `Condition: ${data.weather[0].description}`;
//         document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//       })
//       document.getElementById("reset-weather").addEventListener("click", () => {
//         document.getElementById("city").value = "";
//         document.getElementById("temprature").textContent = "";
//         document.getElementById("weather-info").textContent = "";
//         document.getElementById("weather-icon").src = "";
//         document.getElementById("hourly-forecast").textContent = "";
//       });
      
//   });
  

const apiKey = "f91684de29881f146bf80ee06da41ba3"; // Replace with your actual OpenWeatherMap API key

document.getElementById("get-weather").addEventListener("click", () => {
  const city = document.getElementById("city").value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found or network error.");
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      alert(error.message);
    });
});

document.getElementById("reset-weather").addEventListener("click", () => {
  document.getElementById("city").value = "";
  document.getElementById("temprature").textContent = "";
  document.getElementById("weather-info").textContent = "";
  document.getElementById("weather-icon").src = "";
  document.getElementById("hourly-forecast").textContent = "";
});

function displayWeather(data) {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const iconCode = data.weather[0].icon;

  document.getElementById("temprature").textContent = `Temperature: ${temperature}°C`;
  document.getElementById("weather-info").innerHTML = `
    Description: ${description}<br>
    Humidity: ${humidity}%<br>
    Wind Speed: ${windSpeed} m/s
  `;
  document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
  
    document.getElementById("temprature").textContent = `Temperature: ${temperature}°C`;
    document.getElementById("weather-info").innerHTML = `
      Description: ${description}<br>
      Humidity: ${humidity}%<br>
      Wind Speed: ${windSpeed} m/s
    `;
  
    // Match OpenWeatherMap to Skycon
    const skyconIcon = mapToSkycon(data.weather[0].main);
  
    // Create and play the Skycon
    const skycons = new Skycons({ "color": "black" });
    skycons.add("weather-icon", Skycons[skyconIcon]);
    skycons.play();
  }

  function mapToSkycon(condition) {
    switch (condition.toLowerCase()) {
      case "clear":
        return "CLEAR_DAY";
      case "clouds":
        return "PARTLY_CLOUDY_DAY";
      case "rain":
        return "RAIN";
      case "snow":
        return "SNOW";
      case "sleet":
        return "SLEET";
      case "wind":
        return "WIND";
      case "fog":
        return "FOG";
      case "thunderstorm":
        return "SLEET";
      default:
        return "PARTLY_CLOUDY_DAY";
    }
  }
  
