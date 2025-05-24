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
      
        
//   function displayWeather(data) {
//     const temperature = data.main.temp;
//     const description = data.weather[0].description;
//     const humidity = data.main.humidity;
//     const windSpeed = data.wind.speed;
//     const iconCode = data.weather[0].icon;
  
//     document.getElementById("temprature").textContent = `Temperature: ${temperature}°C`;
//     document.getElementById("weather-info").innerHTML = `
//       Description: ${description}<br>
//       Humidity: ${humidity}%<br>
//       Wind Speed: ${windSpeed} m/s
//     `;
//     document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
//   }
//   });

document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "f91684de29881f146bf80ee06da41ba3"; // Replace with your OpenWeatherMap API key
  
    const getWeatherBtn = document.getElementById("get-weather");
    const resetBtn = document.getElementById("reset-weather");
  
    getWeatherBtn.addEventListener("click", () => {
      const city = document.getElementById("city").value.trim();
      if (!city) {
        alert("Please enter a city name.");
        return;
      }
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error("City not found.");
          return response.json();
        })
        .then(data => {
          displayWeather(data);
        })
        .catch(error => {
          alert(error.message);
        });
    });
  
    resetBtn.addEventListener("click", () => {
      document.getElementById("city").value = "";
      document.getElementById("temprature").textContent = "";
      document.getElementById("weather-info").textContent = "";
      document.getElementById("weather-icon").src = "";
      document.getElementById("hourly-forecast").textContent = "";
    });
  
    function displayWeather(data) {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const iconCode = data.weather[0].icon;
  
      document.getElementById("temprature").textContent = `Temperature: ${temp}°C`;
      document.getElementById("weather-info").innerHTML = `
        Description: ${description}<br>
        Humidity: ${humidity}%<br>
        Wind Speed: ${windSpeed} m/s
      `;
  
      document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }
  });
  